import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Nav(props) {
    return (<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
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