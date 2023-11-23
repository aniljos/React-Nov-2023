import axios from 'axios';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';



export function useLogin(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const navigate = useNavigate();
    useTitle("Login");


   

    async function login(){

        if(userName && password){

            try {
                const url = process.env.REACT_APP_BASE_URL + "/login";
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

    return [userName, setUserName, password, setPassword, message, severity, 
                                            login, closeAlert, calculateValue] as const;
}