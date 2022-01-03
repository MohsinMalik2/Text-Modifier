import React from "react";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

function Nav(props) {
    return (<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.about}</a>
          </li>
        </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault" >Toggle Mode</label>
        </div>
      </div>
    </div>
  </nav>);
}

Nav.propTypes ={ 
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
    contact: PropTypes.string,
}
Nav.defaultProps ={
    title: "Title Here",
    about: "About Menu",
    contact: "Contact Menu",
}

export default Nav;