import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../BaseURL';
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { useNavigate } from "react-router-dom";

function AdminViewEnquiries() {

    const[data,setData]=useState([])
    const navigate = useNavigate();

    useEffect(()=>{
      if(localStorage.getItem('adminlog')==null){
          navigate('/admin-login')
      }
  })
    useEffect(()=>{
        axiosInstance
        .post(`/viewAllEnquiries`)
        .then((res) => {
          console.log(res);
          if (res.data.data != undefined) {
            setData(res.data.data);
          } else {
            setData([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },[])

    const handleRemove=(id)=>{
      axiosInstance.post(`/deleteEnquiryById/${id}`)
      .then((res)=>{
          console.log(res);
        if(res.data.status==200){
          alert('Data Removed Successfully')
          setData(prevArray => prevArray.filter(item => item._id !== id));

        }
        else
        alert('Data not  Removed')
    })
      .catch((err)=>{
        alert('Data not  Removed')
          })
    }

  return (
    <div>
    <AdminNavbar/>
      <div style={{ padding: "80px 40px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.name}</th>
                    <td>{a.email}</td>
                    <td>{a.subject}</td>
                    <td>{a.msg}</td>
                    <td><button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Remove</button></td>
                  </tr>
                );
              })
            ) : (
              <h1>No New Enquiries</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminViewEnquiries
