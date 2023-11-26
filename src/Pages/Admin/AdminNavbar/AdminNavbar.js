import React from "react";
import zookeper from "../../../Assets/zookeper-logo.png";
import "./AdminNavbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function CommonNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-body-tertiary anavbar-navbarr">
        <div className="container-fluid" id="admin-nav-container">
          <img src={zookeper} className="admin-navbar-logo-2" />
          <a className="navbar-brand" href="#">
            ZOOKEPER
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
          <div
            className="collapse navbar-collapse justify-content-center align-this admin-navbar-links"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  anavbar-align-data">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/admin">
                    <a className="nav-link"> Home </a>
                  </Link>
                </a>
              </li>

              <li className="nav-item ">
                <Link to="/admin/admin-all-shops">
                  <a className="nav-link ">Shops</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/admin/admin-all-users">
                  {" "}
                  <a className="nav-link" href="#">
                    Users
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/admin-all-pets">
                  {" "}
                  <a className="nav-link" href="#">
                    Pets
                  </a>
                </Link>
              </li>
              <li className="nav-item admin-nav-logout-btn">
                <Link to="/admin-login">
                  {" "}
                  <a className="nav-link">Logout</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CommonNavbar;
