
export interface AuthState{

    isAuthenticated: boolean,
    userName: string,
    accessToken: string,
    refreshToken: string
}

const initState: AuthState = {

    isAuthenticated:false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}
interface AuthAction{
    type: string,
    payload: AuthState
}
export const authReducer = (currentState=initState, action: AuthAction)=> {

    if(action.type === "SET_AUTH"){
        return action.payload
    }
    return currentState;
}