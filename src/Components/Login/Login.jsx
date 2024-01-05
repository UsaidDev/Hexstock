import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const [email,Setemail]=useState('');
  const [password,Setpassword]=useState('');

  const handleSubmit=()=>{
    console.log(email)
    console.log(password)
  }
  return (
    <div>
      <div className="wrapper">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder='Email' value={email} onChange={((e)=>Setemail(e.target.value))}/>
          <input type="password" placeholder='Password' value={password} onChange={((e)=>Setpassword(e.target.value))}/>
        </form>
        <button onClick={handleSubmit}>Login</button>
        <div className="member">
          Not a Member? <Link to={'/signup'} >Register Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;