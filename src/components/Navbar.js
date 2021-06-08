import React from 'react';
//import mylogo from '../mylogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        
         
            <nav className="lllllllllllllllll navbar-expand-lg navbar-light bg-dark">

                <div className="container">
   {/*<Link className="navbar-brand" to="/"><img className ="logo"  src={mylogo} alt ="logo..."></img></Link>*/}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
<Link to="/About me">
      <li className="nav-item active">
        <div className="nav-link" >About<span className="sr-only"></span></div>
      </li>
      </Link>
      <Link to="/Work">
      <li className="nav-item">
        <div className="nav-link" >Work</div>
      </li>
      </Link>
      <Link to="/Portfolio">
      <li className="nav-item">
        <div className="nav-link" >Portfolio</div>
      </li>
      </Link>
      <Link to="/Contact">
      <li className="nav-item">
        <div className="nav-link" >Contact</div>
      </li>
      </Link>
    
    </ul>
    
  </div>
  </div>
</nav>

    )
}

export default Navbar
 