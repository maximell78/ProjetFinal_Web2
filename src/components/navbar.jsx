import React from 'react';
import Modal from './Modal';

/**
 * Barre de navigation
 *
 */
function NavBar({ totalCounters }) {
  return ( 
  <div className="container">
    <div className="row">
      <div className="offset-7 col-3 navbar-brand">
        <nav className="navbar navbar-expand-md navbar-dark ml-auto">          
          <div className="pt-4" id="navbarSupportedContent">            
            <ul className="navbar-nav">
              <li>
                <Modal/>
              </li>                                  
              <li className="nav-item">
                <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true"/>                      
              </li>
              <li className="nav-item">
              <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
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