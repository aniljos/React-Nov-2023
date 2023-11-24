import { Component, ReactNode } from "react";
import {withBorder} from '../hoc/withBorder';
import { withNavigate } from "../hoc/withNavigate";

type CounterProps = {
    value: number;
    title?: string;
    navigate?: (value: string) => void
}

class Counter extends Component<CounterProps>{

    state = {
        counter: 0,
        message: "hello"
    }

    constructor(props: CounterProps){
        super(props);
        this.state.counter = this.props.value; 
    }

    inc = () => {
        console.log("inc invoked");
        //this.props.value++; //props is read-only
        //this.state.counter++; //Never to modify state directly

        //this.setState is async
        //this.setState(slice of the state to update, callback(invoked after the state is updated))
        this.setState({
            counter: this.state.counter + 1
        }, () => {

            //callback(invoked after the state is updated)
            console.log("this.counter", this.state.counter);

        });
        
    }
    decr = () => {

        this.setState({
            counter : this.state.counter - 1
        });
    }
    navigateToHome = () => {

        if(this.props.navigate){
            this.props.navigate("/");
        }
            
    }

    render() {
        return (
            <div>
                <h4>Counter: {this.state.counter}</h4>
                <p>This is a class-based component</p>
                <div>
                    <button className="btn btn-success" onClick={this.inc}>Inc</button>&nbsp;
                    <button className="btn btn-danger" onClick={this.decr}>Decr</button>
                </div>
                <br/>
                <div>
                    <button className="btn btn-info" onClick={this.navigateToHome}>Navigate To Home</button>
                </div>
            </div>
        )
    }
    componentDidMount(): void {
        console.log("[Counter] mounted")
    }
    componentWillUnmount(): void {
        console.log("[Counter] unmounting")
    }
    componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("[Counter] updated")
    }


}

export default withNavigate(withBorder(Counter));