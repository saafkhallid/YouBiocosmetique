import React, { useState } from 'react'
import Layout from '../Pages/Layout'
import toastr from 'toastr';
import "toastr/build/toastr.css";

import { API_URL } from '../config'


const Signup = (props) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })


    const handleChange = e => {

        setUser({...user, [e.target.id]: e.target.value})

    }

    
    const submitSignup = e => {

        e.preventDefault();

        fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                toastr.warning(res.error, 'Please Check form !', {
                    positionClass: "toast-bottom-left",
                })
            }
            else {
                toastr.success('User is created SuccessFully', 'New Accout', {
                    positionClass: "toast-bottom-left",
                })

                props.history.push('/signin')
            }

            

        })
        .catch(err =>  toastr.error(err, 'Server error !', {
                    positionClass: "toast-bottom-left",
                }))
    }

    const form = () => (
      <form onSubmit={submitSignup} className="formecsssinup">
        <h1 className=" font-weight-bold text-center fs-1">inscription</h1>
        <div className="form-group ">
          <label htmlFor="name" className="text-muted fs-2 font-weight-bold">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control "
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-muted fs-2 font-weight-bold ">
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control "
            id="email"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="password"
            className="text-muted fs-2 font-weight-bold "
          >
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control font-weight-bold"
            id="password"
          />
        </div>
        <button className=" Add-button btn btn-lg btn-block btn-outline-success font-weight-bold text-light bg-secondary">
          Sign Up
        </button>
      </form>
    );

    return (
        <div>
        <Layout 
           title="Sign up" 
           description="Crier un compte" 
           className="container"
        >
         
        <div className="row">
            <div className="col-md-6 mx-auto">

                { form() } 
            </div>
        </div> 

        </Layout>
    </div>
    )
}

export default Signup
