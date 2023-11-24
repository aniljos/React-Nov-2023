import {useNavigate} from 'react-router-dom';

export const withNavigate = (Component: any) => {


    return function NavigateHOC(props: any){

        const navigate = useNavigate();

        return (
            <Component {...props} navigate={navigate}/>
        )
    }

}