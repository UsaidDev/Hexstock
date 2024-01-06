import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../FirebaseContext/FirebaseContext';
import { useContext } from 'react';
function Signup() {
  const [Username, Setusername] = useState('');
  const [Phone, Setphone] = useState('');
  const [Email, Setemail] = useState('');
  const [Password, Setpassword] = useState('');
  const navigate = useNavigate()

  const { firebase } = useContext(FirebaseContext)
  const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(Email, Password).then((result) => {
      result.user.updateProfile({ displayName: Username }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          Username: Username,
          Phone: Phone,
          Email: Email,
        }).then(() => {
          alert("Account Created Successfully")
          navigate('/login')
        }).catch((error) => {
          console.log(error)
        })
      })
    })
  }
  return (
    <div>
      <div className="wrapper">
        <h1>Signup</h1>
        <form>
          <input type="text" placeholder='Username' onChange={((e) => Setusername(e.target.value))} />
          <input type="number" placeholder='Phone Number' onChange={((e) => Setphone(e.target.value))} />
          <input type="email" placeholder='Email' onChange={((e) => Setemail(e.target.value))} />
          <input type="password" placeholder='Password' onChange={((e) => Setpassword(e.target.value))} />
        </form>
        <button onClick={handleSubmit}>Signup</button>
        <div className="member">
          Already a member? <Link to={'/login'} >Login here</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup