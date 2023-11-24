import axios, {InternalAxiosRequestConfig} from "axios";
import {AppState, store} from '../redux/store'


axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {

    const state = store.getState();
    const accessToken = state.auth.accessToken;
    const base_url = process.env.REACT_APP_BASE_URL as string;
    if(accessToken && config.url?.startsWith(base_url)){

        config.headers.Authorization = `Bearer ${accessToken}`;
    }
   

    return config;
})