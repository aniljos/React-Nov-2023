
// <Alert message="Hello" severity="error" autoClose={true} />
type AlertProps = {

    message: string;
    severity?: string;
    autoClose?: boolean;
}

function Alert(props: AlertProps){




    return (
        <div className={`alert alert-${props.severity}`}>
            {props.message}
        </div>
    )
}


export default Alert;