import axios from 'axios';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import { useTitle } from '../hooks/useTitle';

function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const navigate = useNavigate();
    useTitle("Login");


   

    async function login(){

        if(userName && password){

            try {
                const url = "http://localhost:9000/login";
                const response = await axios.post(url, {name: userName, password});
                setMessage("")
                navigate("/products");

            } catch (error) {
                setSeverity("warning");
                setMessage("Invalid credentials");
            }
        }
        else{

            setSeverity("error");
            setMessage("Provide the credentials");
        }
    }
    const closeAlert  = useCallback(() => {
        setMessage("");
    }, [])

    const calculateValue = useMemo(() => {

        console.log("in calculateValue");
        return userName  + 1000;
    }, [userName]);

    return (
        <div>
            <h4>Login</h4>

            <p>Calaculated Value : {calculateValue}</p>

            {message ? <Alert message={message} severity={severity} onClose={closeAlert}/> : null}

            <div className="form-group">
                <label>UserName</label>
                <input className="form-control" placeholder="UserName" 
                                            value={userName} onChange={e => setUserName(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="********"
                                            value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <br/>

            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>

        </div>
    )

}

export default Login;