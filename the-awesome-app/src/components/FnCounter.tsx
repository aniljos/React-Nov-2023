function FnCounter(){

    let counter = 0;

    function inc(){
        console.log("inc invoked..");
        counter++;
        console.log("counter", counter);
    }
    const decr = () => {

        console.log("decr invoked");
        counter--;
        console.log("counter", counter);
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>++</button>&nbsp;
                <button onClick={decr}>--</button>
            </div>
        </div>
    )
}

export default FnCounter;