import React from 'react';


// <Alert message="Hello" severity="error" autoClose={true} />
type AlertProps = {

    message: string;
    severity?: string;
    autoClose?: boolean;
    onClose?: () => void
}


//Alert message="Provide the credentials" severity="error" onClose="0012345"/>

//Alert message="Provide the credentials" severity="error" onClose="0078954"/>

//React.memo introduced in 16.3 => optimization
// Memoization pattern: cache the generated JSX
// when state or props changes the component is rerendered

 const Alert = React.memo(function Alert(props: AlertProps) {


    console.log("rendering alert");
    let severity = "ïnfo";

    if (props.severity) {

        severity = props.severity;
        if (props.severity === "error") {
            severity = "danger"
        }
    }

    function close(){

        if(props.onClose){
            props.onClose()
        }
        
    }

    return (
        <div className={`alert alert-${severity}`}>
            <p style={{ width: "95%", display: "inline-block" }}>{props.message}</p>
            <button className={`btn btn-${severity}`} onClick={close}>
                <span>&times;</span>
            </button>
        </div>
    )
})


export default Alert;