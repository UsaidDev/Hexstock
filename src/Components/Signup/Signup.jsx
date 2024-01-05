import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
function Signup() {
  const [Username,Setusername]=useState('');
  const [Phone,Setphone]=useState('');
  const [Email,Setemail]=useState('');
  const [Password,Setpassword]=useState();

  const handleSubmit=()=>{
    console.log(Username,Phone,Email,Password)
  }
  return (
    <div>
      <div className="wrapper">
        <h1>Signup</h1>
        <form>
          <input type="text" placeholder='Username' onChange={((e)=>Setusername(e.target.value))}/>
          <input type="number" placeholder='Phone Number' onChange={((e)=>Setphone(e.target.value))}/>
          <input type="email" placeholder='Email' onChange={((e)=>Setemail(e.target.value))} />
          <input type="password" placeholder='Password' onChange={((e)=>Setpassword(e.target.value))} />
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