import React, {useState} from 'react';
// import './App.css';
import nurse from '../../src/nurse.jpg';
import { Link } from 'react-router-dom'
import {sinup} from '../Auth/SignUp';

export const SignUp = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const Register = (() => {
        console.log(email, password)
       sinup(email, password)
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
                            <label>Username<br />
                                <input type="text" 
                                style={{width:"200px"}}
                                onChangeText={(username) => setUsername(username.target.value)}
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Email<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                                onChange={(email) => setEmail(email.target.value)}
                               
                                />
                            </label>
                        </form>
                        <form style={{marginTop:'20px'}}>
                            <label>Password<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                                onChange={(password) => setPassword(password.target.value)}
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Confirm Password<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                                onChange={(confirmPassword) => setConfirmPassword(confirmPassword.target.value)}
                                />
                            </label>
                        </form>
                        
                            <button className="btn"  onClick={Register}>SignUp</button>
                        
                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}
export default SignUp