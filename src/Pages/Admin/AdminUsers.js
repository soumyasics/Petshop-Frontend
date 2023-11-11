import "./AdminUsers.css"
import React from 'react'
import demo from "../../Assets/full-shot-woman-working-floor.jpg"
function AdminUsers() {
    const users=[
        {
            id: 1,
            firstName: "Terry", 
            lastName: "E"
        },
        {
            id: 2,
            firstName: "Jhon", 
            lastName: "B"
        },
        {
            id: 3,
            firstName: "Tony", 
            lastName: "E"
        },
        {
            id: 4,
            firstName: "Mike", 
            lastName: "S"
        },
        {
            id: 5,
            firstName: "Angel", 
            lastName: "P"
        },
        {
            id: 6,
            firstName: "Terry", 
            lastName: "E"
        },
        {
            id: 7,
            firstName: "Clark", 
            lastName: "E"
        },
        {
            id: 8,
            firstName: "Jennie", 
            lastName: "D"
        }
    ];
  return (
    <>
    <div className="container container-box">
        <div className="row">
    {users.map(function(AllUsers){
      return (
            <div key={AllUsers.id} className="col-6 box">
                    <div className="card card1 bg-secondary-subtle">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src={demo} className="card-img-left user-img name"></img>
                            </div>
                            <div className="col-6">
                                <h5 className="card-title name">{AllUsers.firstName} {AllUsers.lastName}</h5>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill btn1 align-items-center ">MORE INFO</button>
                    </div>
                </div>
      )
    })}
    </div>
    </div></>
  )
}
export default AdminUsers;