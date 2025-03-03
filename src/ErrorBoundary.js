import { Component } from "react";

export default class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        console.log("errpr derived", error);
        return {
            hasError : true
        };
    }
    componentDidCatch(error, info){
        console.log("error", error);
        console.log("error info", info);
    }
    render(){
        if(this.state.hasError){
            return (<h1>Something went wrong contact admin</h1>)
        }
        return this.props.children
    }
}