import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
        <>
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
              <div className="container-fluid">
              <Link className="navbar-brand" to="/">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
              <Link className="nav-link" to="">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
              </li>
              </ul>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          
              
              
              </div>
              </div>
              </nav>
        </>
      
    </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired
  }
Navbar.defaultProps = {
    title: "Set Title",
    homeName:"Set Home Name"
    
   
};
