import React, {useState} from 'react';
import axios from 'axios';

function RegisterScreen() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [msgs, setMsgs] = useState();

    const postLogin = (username, password) => {
        axios.post('http://localhost:5000/register', {username, password})
        .then(response => response.data.msg)
        .then(msg => setMsgs(msg));
    }    

    return (
        <div className="text-center">
            <div className="display-2 my-3">Register</div>
            <input placeholder="Username" onChange={e => setUserName(e.target.value)}/>
            <input placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={() => postLogin(userName, password)}>Submit</button>
            <h4>{msgs}</h4>
        </div>
    )
}

export default RegisterScreen;