import React from 'react';
import './AdminDashboard.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import dashboard_logo from '../../../Assets/material-symbols_dashboard.png';
import delete_icon from '../../../Assets/material-symbols_delete.png';
import NewsLetter from '../../Common/NewsLetter/NewsLetter';
import Footer from '../../Common/Footer/Footer';
import { Link } from "react-router-dom";
function AdminDashboard() {
  return (
    <>
    <AdminNavbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg bg-primary text-center admin-dashboard-logo'>
                <img src={dashboard_logo} className='img-fluid mx-auto' alt='dashboard'/>
                <h1 className='text-white'>DASHBOARD</h1>
            </div>
        </div>
        <div  className='row'>
            <div className='col-lg text-center m-5'>
                <h6 className='fw-light text-secondary'>USERS</h6>
                <h1 className='fw-bolder fs-1'>STATUS</h1>
            </div>
        </div>
        <div className='row p-2 text-center'>
            <div className='col-lg admin-dashboard-status1 align-middle'>
                <div className='bg-primary admin-dashboard-dot border m-1 d-inline-block'></div>
                <h4 className='m-5 ms-1  p-1 d-inline-block'>USER STATUS</h4>
                <h2 className='p-4'>200 USERS</h2>
            </div>
            <div className='col-lg admin-dashboard-status2 text-white'>
                <div className='bg-primary admin-dashboard-dot border-0 m-1 d-inline-block'></div>
                <h4 className='m-5 ms-1  p-1 d-inline-block'>SHOPS</h4>
                <h2 className='p-4'>200 SHOPS</h2>
            </div>
            <div className='col-lg admin-dashboard-status3 text-white'>
                <div className='bg-primary admin-dashboard-dot border-0 m-1 d-inline-block'></div>
                <h4 className='m-5 ms-1  p-1 d-inline-block'>ACCESSORIES</h4>
                <h2 className='p-4'>200 NOS</h2>
            </div>
        </div>
        <div className='row m-5'>
            <div className='col border rounded'>
                <h1 className='m-5'>TRANSACTIONS</h1>
                <ul className="nav nav-tabs m-5 mb-0">
                    <li className="nav-item">
                        <Link className="nav-link active  text-secondary fw-bolder" to="#">SHOPS</Link>
                     </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-secondary fw-bolder" to="#">USERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-secondary fw-bolder" to="#">ACCESSORIES</Link>
                    </li>
                </ul>
                <div className='table-responsive'>
                <table className="table table-hover table-bordered align-middle ">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">SHOP NAME</th>
                            <th scope="col">DETAILS</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>SHOP NAME</td>
                            <td>A Small Part Or Fact That is Considered Separatelty From The Whole. For Example, "That Ambiguous </td>
                            <td><img src={delete_icon} alt='delete icon' className='img-fluid'/></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        
    </div>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default AdminDashboard