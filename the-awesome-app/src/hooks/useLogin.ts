import axios from 'axios';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { useDispatch } from 'react-redux'



export function useLogin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const navigate = useNavigate();
    useTitle("Login");
    const dispatch = useDispatch();




    async function login() {

        if (userName && password) {

            try {
                const url = process.env.REACT_APP_BASE_URL + "/login";
                const response = await axios.post(url, { name: userName, password });
                const accessToken = response.data.accessToken;
                const refreshToken = response.data.refreshToken;

                dispatch({
                    type: "SET_AUTH", payload: {
                        isAuthenticated: true,
                        userName: userName,
                        accessToken: accessToken,
                        refreshToken: refreshToken
                    }
                });

                setMessage("")
                navigate("/products");

            } catch (error) {

                dispatch({
                    type: "SET_AUTH", payload: {
                        isAuthenticated: false,
                        userName: "",
                        accessToken: "",
                        refreshToken: ""
                    }
                });
                setSeverity("warning");
                setMessage("Invalid credentials");
            }
        }
        else {

            dispatch({
                type: "SET_AUTH", payload: {
                    isAuthenticated: false,
                    userName: "",
                    accessToken: "",
                    refreshToken: ""
                }
            });
            setSeverity("error");
            setMessage("Provide the credentials");
        }
    }
    const closeAlert = useCallback(() => {
        setMessage("");
    }, [])

    const calculateValue = useMemo(() => {

        console.log("in calculateValue");
        return userName + 1000;
    }, [userName]);

    return [userName, setUserName, password, setPassword, message, severity,
        login, closeAlert, calculateValue] as const;
}