
type HelloProps = {
    message: string
}

function Hello(props: HelloProps){

    //console.log("Hello", props);
    return (
        <div>
            <h3>Hello {props.message}</h3>
            <p>This is a functional component</p>
            <p>Generated at : {new Date().toString()}</p>
        </div>
    )
}

export default Hello;

