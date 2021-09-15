import React from "react";
import SignIn from "./SignIn";

/**
 * Barre de navigation
 *
 */
function NavBar({ totalCounters }) {
  return (    
  <div className="navbar-brand">
    <nav className="navbar navbar-light bg-light">      
      <SignIn/>    
      <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />    
      <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
        {totalCounters}
      </span>        
      Items
    </nav>
  </div>    
  );
}

export default NavBar;
