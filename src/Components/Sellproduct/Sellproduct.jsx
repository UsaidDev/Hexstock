import React from 'react'
import './Sellproduct.css'

function Sellproduct() {
  return (
    <>
     <div className="wrapper-login">
      <h2><span className='heading'>USER</span>LOGIN</h2>
      <form>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
      </form>
      <button>Send</button>
     </div>
    </>
  );
}
export default Sellproduct;