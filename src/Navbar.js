import React, { Fragment } from 'react'
import {
    
    Link
  } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <Fragment>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <i className="fas fa-film mr-2"></i>
                Catalog-Z
            </a>
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* <a className="nav-link nav-link-1 active" aria-current="page" href="index.html">Photos</a> */}
                    <Link className="nav-link nav-link-1 active"aria-current="page" to="/">Photos</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link nav-link-2" href="videos.html">Videos</a> */}
                    <Link to="/Video" className="nav-link nav-link-2" >Videos</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link nav-link-3" href="about.html">About</a> */}
                    <Link className="nav-link nav-link-3" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link nav-link-4" href="contact.html">Contact</a> */}
                    <Link className="nav-link nav-link-4" to="/Contact">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>

        </Fragment>
    </div>
  )
}

export default Navbar