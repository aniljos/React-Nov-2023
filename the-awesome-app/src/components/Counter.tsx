import { Component, ReactNode } from "react";

type CounterProps = {
    value: number;
    title?: string;
}

class Counter extends Component<CounterProps>{

    render() {
        return (
            <div>
                <h4>Counter: {this.props.value}</h4>
                <p>This is a class-based component</p>
            </div>
        )
    }
}

export default Counter;