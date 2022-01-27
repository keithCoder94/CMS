import React, {useState} from 'react';
// import './App.css';
import nurse from '../../src/nurse.jpg';

export const SignUp = () => {
    const [username, setUsername] = ('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const login = () => {
        login(username, email, password, confirmPassword)
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
                            <label>Username<br />
                                <input type="text" 
                                style={{width:"200px"}}
                                onChangeText={setUsername}
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Email<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                                onChangeText={setEmail}
                                />
                            </label>
                        </form>
                        <form style={{marginTop:'20px'}}>
                            <label>Password<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                                onChangeText={setPassword}
                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Confirm Password<br />
                                <input 
                                type="text" 
                                style={{width:"200px"}}
                                onChangeText={setConfirmPassword}
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
