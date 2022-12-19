import React from "react";
import PropTypes from 'prop-types';
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                {/* <Link class="nav-link active" aria-current="page" to="/">Home</Link> */}
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" to="/about">About</a>
                </li>   */}
           </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
{/* 
            { <div className="form-check form-switch">
              <input className="form-check-input" onClick={(() => {
    props.changeColor("danger")})} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Change to Red</label>
            </div> }
              


            <div className="form-check form-switch">
              {/* <input className="form-check-input" onClick={props.changeColor("success")} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
              {/* <input className="form-check-input" onClick={(() => {
    props.changeColor("success")})} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Change to green</label>
            </div> */} 
            
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
            </div>
          </div>
        </div>
      </nav>
  );
}

Navbar.prototype = {title: PropTypes.string.isRequired,
                   aboutText: PropTypes.string}

Navbar.defaultProps = {
  title : "this is default title",
  aboutText : "this is default about"
}                  
