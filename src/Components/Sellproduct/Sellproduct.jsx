import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Sellproduct.css'
import { FirebaseContext, Authcontext } from '../FirebaseContext/FirebaseContext'

function Sellproduct() {
  const [name, Setname] = useState('');
  const [category, Setcategory] = useState('');
  const [price, Setprice] = useState('')
  const [image, Setimage] = useState(null)
  const { firebase } = useContext(FirebaseContext)
  const { user, Setuser } = useContext(Authcontext)
  const date = new Date();
  const navigate = useNavigate();


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      Setuser(user)
    })
  })

  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url)
        firebase.firestore().collection('products').add({
          name: name,
          category: category,
          price: price,
          url: url,
          userId: user.uid,
          createAt: date.toDateString(),
        }).then(() => {
          alert("Data Successfull Uploaded");
          navigate('/')
        }).catch((error) => {
          alert(error);
        })
      })
    })
  }
  return (
    <>
      <div className="wrapper-login">
        <h2><span className='heading'>SellYour </span>Items</h2>
        <form>
          <input type="text" placeholder='Name' value={name} onChange={((e) => Setname(e.target.value))} />
          <input type="text" placeholder='Category' value={category} onChange={((e) => Setcategory(e.target.value))} />
          <input type="number" placeholder='Price' value={price} onChange={((e) => Setprice(e.target.value))} />
          <img src={image ? URL.createObjectURL(image) : ''} alt="Posts" className='product-image' />
          <input type="file" onChange={((e) => Setimage(e.target.files[0]))} />
        </form>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </>
  );
}
export default Sellproduct;