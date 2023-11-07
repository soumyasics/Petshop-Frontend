import React from 'react';
import zookeper from '../../../Assets/zookeper-logo.png';
import profilePic from '../../../Assets/profile.jfif';
import "./UserNavbar.css";
import {BsSearch} from "react-icons/bs";
import { useState } from 'react';
function UserNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggle(e) {
        e.preventDefault()
        setIsOpen(!isOpen);
    }

   
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-body-tertiary navbarr">
            <div className="container-fluid">
                <img src={zookeper}/>
                <a className="navbar-brand" href="#">ZOOKEPER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center align-this" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                     <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                            <a className="nav-link" href="#">Explore</a>
                     </li>
                     <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Adopt</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Gallery</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Other pages</a>
                     </li>
                    </ul>
                     
                    <form className="d-flex" role="search">
                        <div className='search'>
                           {isOpen && <input className="form-control me-2 inputsearch" type="search" placeholder="Search" aria-label="Search"/> } 
                        </div>   
                    </form>
                    <button className="btn btn-outline-success btn1" onClick={toggle}><BsSearch/></button>
                </div>
                <div>
                    <img src={profilePic} alt='profile-picture' className='profile-frame' />
                </div>
            </div> 
        </nav>
    </div>
  )
}

export default UserNavbar