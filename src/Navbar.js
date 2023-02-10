import React from 'react';
import evergreen from './logo/evergreen.jpg';
import './Navbar.css';
import LogIn from './container/LogIn';

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
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href={LogIn}>Log In</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-primary" href="#">Action</a></li>
            <li><a className="dropdown-item text-primary" href="#">Another action</a></li>
            <li><hr className="dropdown-divider text-primary"/></li>
            <li><a className="dropdown-item text-primary" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-light">Disabled</a>
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
