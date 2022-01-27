import React from 'react';
// import './App.css';
import nurse from '../../src/nurse.jpg';


export const LogIn = () => {

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

                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Password<br />
                                <input
                                    type="text"
                                    style={{ width: "200px" }}

                                />
                            </label>
                        </form>
                        <p className="text">Don't have an account?  <p style={{ color: "white" }}>Sign Up</p></p>
                        <button className="btn">LOGIN</button>

                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}
