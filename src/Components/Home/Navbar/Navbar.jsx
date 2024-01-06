import React, { useContext, useEffect } from 'react'
import './Navbar.css'
import Logo from '../../../assets/images/image-17.png'
import { Link } from 'react-router-dom'
import { Authcontext, FirebaseContext } from '../../FirebaseContext/FirebaseContext'
function Navbar() {
  const { firebase } = useContext(FirebaseContext)
  const { user, Setuser } = useContext(Authcontext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      Setuser(user)
    })
  })
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Logo} alt='imageloading' />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">Shop</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">Pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">Connect</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <li className="nav-item d-sm-block">
              <a className="nav-link" href="#/">{user ? user.displayName : "Welcome"}</a>
            </li>
            <li className="nav-item d-sm-block">
              <Link to={'/login'}>
                <a className="nav-link" href="#/">Login</a>
              </Link>
            </li>
            <li className="nav-item d-sm-block">
              <Link to={'sell'}>
              <a className="nav-link" href="#/">SellProduct</a>
              </Link>
            </li>
          </form>
        </div>
      </nav>
    </>
  )
}
export default Navbar;