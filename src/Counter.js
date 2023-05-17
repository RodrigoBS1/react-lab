import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            nameOfCounter: "initial Counter",
        };
    }

    upByOne = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }
    
    decrementCounter = () => {
        this.setState ({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.nameOfCounter}</h3>
                <button onClick={this.decrementCounter}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.upByOne}>+</button>
            </div>
        );
    }
}

export default Counter;