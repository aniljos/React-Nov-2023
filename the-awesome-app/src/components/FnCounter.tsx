import {ChangeEvent, useState, useRef} from 'react';

function FnCounter(){

    const [counter, setCounter] = useState(5);
    const inputRef = useRef<HTMLInputElement>(null)

    function inc(){
        console.log("inc invoked..");
        setCounter(counter + 1);
        
    }
    const decr = () => {

        console.log("decr invoked");
        setCounter(counter - 1);
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        setCounter(Number(value));
    }
    function handleUpdate(){
        console.log("inputRef", inputRef);
        setCounter(Number( inputRef.current?.value));
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>++</button>&nbsp;
                <button onClick={decr}>--</button>
            </div>
            <div>
                {/* controlled input */}
                Counter: <input  type="number" value={counter} onChange={handleChange}/>
            </div>
            <div>
                {/* uncontrolled input */}
                Update Counter: <input ref={inputRef} type="number" defaultValue={counter}/> &nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default FnCounter;