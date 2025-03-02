import React, { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: [],
    };
    console.log("component A consttrucotr");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getderivedstatefromprops");
    // setState({name : "kk"});
    return null;
  }

  componentDidMount() {
    console.log("componendidmount A");
    // this.setState(name);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ data: data });
        console.log("data after", data);
      });
  }

  render() {
    console.log("compinent A render");
    // this.setState({name : "ca"});
    console.log(this.state.data);
    return (
      <>
        <h1>{this.state.name}</h1>
        {this.state.data.slice(0, 5).map((d, i) => {
          return <li key={i}>{d.name}</li>;
        })}
        {/* <ComponentB /> */}
      </>
    );
  }
}

export default ComponentA;
