import React, { useState } from 'react'
import Layout from '../Pages/Layout'
import toastr from 'toastr';
import "toastr/build/toastr.css";


import { API_URL } from '../config'


const Signin = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })


    const handleChange = e => {

        setUser({...user, [e.target.id]: e.target.value})

    }

    
    const submitSignin = e => {

        e.preventDefault();

        fetch(`${API_URL}/signin`, {
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
                toastr.info('User is authenticated SuccessFully', 'Welcome', {
                    positionClass: "toast-bottom-left",
                })

                localStorage.setItem('jwt_info', JSON.stringify(res))

                props.history.push('/')
            }

            

        })
        .catch(err =>  toastr.error(err, 'Server error !', {
                    positionClass: "toast-bottom-left",
                }))
    }
    const form = () => (
      <form onSubmit={submitSignin} className="formecss">
        <h1 className="text-center font-weight-bold  fs-1">Connexion</h1>
        <div className="form-group ">
          <label
            htmlFor="email"
            className="text-muted fs-1 font-weight-bold forme-titre"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control "
            id="email"
          />
        </div>

        <div className=" form-group">
          <label
            htmlFor="password"
            className="text-muted font-weight-bold forme-titre"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
          />
        </div>

        <button className=" Add-button badge-pill  btn btn-lg btn-block btn-outline-info font-weight-bold text-light bg-secondary">
          Sign In
        </button>
      </form>
    );

    return (
        <div>
        <Layout 
           title="Sign In" 
           description="connexion" 
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

export default Signin
