import React, {Component} from "react";


class ComponentB extends Component{
    constructor(){
        super();
        this.state = {
            name : "ComponentB"
        }
        console.log("component B consttrucotr");
        
    }
    static getDerivedStateFromProps(props, state){
        console.log("getderivedstatefromprops componentB");
    // setState({name : "kk"});
        return null;
    }

    componentDidMount(){
        console.log("componendidmount B");
        // this.setState(name);
    }

    render(){
        console.log("compinent B render");
        // this.setState({name : "ca"});
        return (

            <h2>
                {this.state.name}

            </h2>
        )
    }
}

export default ComponentB;