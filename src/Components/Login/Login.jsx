import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div>
      <div className="wrapper">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </form>
        <button>Login</button>
        <div className="member">
          Not a Member? <Link to={'/signup'} >Register Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;