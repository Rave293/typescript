// CODE1
// Define the type for the props that the Greeting component will receive
interface GreetingProps {
  name: string;
}

// Define the functional component with props type annotation
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;



// CODE2

// import React, { Component } from 'react';

// Define the type for the state
interface CounterState {
  count: number;
}

// Define the class component with state type annotation
class Counter extends Component<{}, CounterState> {
  // Initialize state with a type
  state: CounterState = {
    count: 0
  };

  // Method to update the state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
