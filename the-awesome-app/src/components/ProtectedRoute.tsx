import { useSelector } from "react-redux";
import { AuthState } from "../redux/authReducer";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: any
}

function ProtectedRoute(props: ProtectedRouteProps){

    const auth = useSelector((state: any) => state.auth) as AuthState

    if(auth.isAuthenticated){
        return props.children
    }
    else{
        return <Navigate to="/login"/>
    }
    
}
export default ProtectedRoute;