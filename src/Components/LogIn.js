import React, { useState } from 'react';
import '../App.css';
import nurse from '../../src/nurse.jpg';
import { Link } from 'react-router-dom';
import { Login } from '../Auth/SignUp';




export const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Register = (() => {
        console.log(email, password)
        Login(email, password)
    })

    return (
        <div>
            <div className="rectangle1">
                <h1 className="heading">CyberPharm</h1>
            </div>
            <div className="body">
                <div className="rectangle2">
                    <div className="textinput">
                        <form>
                            <label>Email<br />
                                <input
                                    type="text"
                                    style={{ width: "200px" }}
                                    onChangeText={(email) => setEmail(email.target.value)}
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Password<br />
                                <input
                                    type="text"
                                    style={{ width: "200px" }}
                                    onChangeText={(password) => setPassword(password.target.value)}

                                />
                            </label>
                        </form>
                        <p className="text">Don't have an account?
                            <nav>
                                <Link to="SignUp" style={{ color: "white" }}>Sign Up</Link>
                            </nav>
                        </p>
                        <nav>
                            <Link className="btn" onClick={Register}>LOGIN</Link>
                        </nav>


                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}
