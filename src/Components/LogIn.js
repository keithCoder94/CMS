import React, {useState} from 'react';
import { NavigationType } from 'react-router';
// import './App.css';
import nurse from '../../src/nurse.jpg';
import { firebase } from '../Firebase/config';
import {Link,Route} from 'react-router-dom'
export const LogIn = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const login = (email, password) => {
        firebase.auth().signInWithEmailAndPawword(email, password).then(() => {
            alert.alert("Success")
        })
    }
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
                                style={{width:"200px"}}
                                onChangeText={setEmail}
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Password<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                                onChangeText={setPassword}
                                />
                            </label>
                        </form>
                        <p className="text">Don't have an account?  <p style={{color:"white"}}>Sign Up</p></p>
                        <button className="btn">LOGIN</button>
                       
                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}
