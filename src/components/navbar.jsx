import React from 'react';
import Home from './Home'

function NavBar({ totalCounters }) {
  return ( 
  <div className="container-fluid">
    <div className="row">
      <div className="offset-1 col-9">
        <nav className="navbar navbar-expand navbar-dark">
          <a href="/">
            Accueil
          </a>
            <div className="collapse navbar-collapse pt-4 offset-7" id="navbarSupportedContent">            
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Home/>
                </li>
                <li className="nav-item">
                  <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true"/>                      
                </li>
                <li className="nav-item">
                <span className="badge badge-pill m-2 bg">
                  {totalCounters}
                </span>
                </li>
                <li className="nav-item">
                  <span> Items </span>
                </li>                            
              </ul>
            </div>
        </nav>
      </div>
    </div>
  </div>
      
  );
}

export default NavBar;