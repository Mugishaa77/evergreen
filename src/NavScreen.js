import React from 'react';
import evergreen from './logo/evergreen.jpg';
import './Navbar.css';

export default function Navbar () {
    return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
  <div className="container-fluid">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={evergreen}
       alt="Logo" width="200" height="150" class="d-inline-block align-text-top"/>
    </a>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Sign Up</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled text-light">Login</a>
        </li>
      </ul>
       <form className="d-flex">
      </form>
    </div>
  </div>
</nav>
    </div>
    );
} 
