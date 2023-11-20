import React from 'react';
import zookeper from '../../Assets/zookeper-logo.png';
import profilePic from '../../Assets/profile.jfif';
import "./CommonNavbar.css";
import {BsSearch} from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';
function CommonNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggle(e) {
        e.preventDefault()
        setIsOpen(!isOpen);
    }

   
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-body-tertiary cnavbar-navbarr">
            <div className="container-fluid">
                <img src={zookeper}/>
                <a className="navbar-brand" href="#">ZOOKEPER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center align-this" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 cnavbar-underline" >
                     <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                
                     <li className="nav-item cnavbar-underline">
                           <Link to="/about"> <a className="nav-link cnavbar-underline" >About</a></Link>
                     </li>
                    
                     <li className="nav-item">
                        <a className="nav-link" href="#">Gallery</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                     </li>
                    
                    </ul>
                     
                    
                </div>

            </div> 
        </nav>
    </div>
  )
}

export default CommonNavbar