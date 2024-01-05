import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div>
      <div className="wrapper">
        <h1>Signup</h1>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="number" placeholder='Phone Number' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </form>
        <button>Signup</button>
        <div className="member">
          Already a member? <Link to={'/login'} >Login here</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup