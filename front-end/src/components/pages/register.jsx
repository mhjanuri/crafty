import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Username</label>
                                                <input type="text" className="form-control" id="fname"
                                                       placeholder="Username" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Email</label>
                                                <input type="email" className="form-control" id="lname"
                                                       placeholder="Email" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Password</label>
                                                <input type="password" className="form-control" id="email"
                                                       placeholder="Enter your password" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Confirm Password</label>
                                                <input type="password" className="form-control" id="review"
                                                       placeholder="Re-enter your password" required="" />
                                            </div>
                                            <a href="/login" className="btn btn-solid">create Account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register