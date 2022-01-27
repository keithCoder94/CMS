import React, {useState} from 'react';
// import './App.css';
import nurse from '../../src/nurse.jpg';

export const SignUp = () => {
   
    return (
        <div>
            <div className="rectangle1">
                <h1 className="heading">CyberPharm</h1>
            </div>
            <div className="body">
                <div className="rectangle2">
                    <div className="textinput">
                        <form>
                            <label>Username<br />
                                <input type="text" 
                                style={{width:"200px"}}
                               
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Email<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                               
                                />
                            </label>
                        </form>
                        <form style={{marginTop:'20px'}}>
                            <label>Password<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                              
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Confirm Password<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                              
                                />
                            </label>
                        </form>
                        <button className="btn">SIGNUP</button>
                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}
