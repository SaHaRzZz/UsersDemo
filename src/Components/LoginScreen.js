import React, { useState } from 'react';
import axios from 'axios';

function LoginScreen() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [msgs, setMsgs] = useState();
    const [status, setStatus] = useState('Not connected');

    const postLogin = (username, password) => {
        axios.post('https://adaptable-second-saguaro.glitch.me/login', {username, password})
        .then(response => response.data.msg)
        .then(msg => msg == 'Successfully connected!' ? [setStatus('Connected!'), setMsgs()] : [setStatus('Not connected'), setMsgs(msg)]);
    }    

    return (
        <div className="text-center">
            <div className="display-2 my-3">Login</div>
            <input placeholder="Username" onChange={e => setUserName(e.target.value)}/>
            <input placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={() => postLogin(userName, password)}>Submit</button>
            <h4>{msgs}</h4>
            <h1>{status}</h1>
        </div>
    )
}

export default LoginScreen;