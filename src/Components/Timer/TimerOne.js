import React ,{Component} from "react";


class TimerOne extends Component{
    constructor(){
        super();
        this.state = {
            time : 0
        }
        this.timer = null;
        console.log("timerone constructor");
        console.log("timer", this.timer);
    }
    static getDerivedStateFromProps(){
        console.log("Timerone getderivedstatefromprops");
        // console.log("timer", timer);
        return null;
    }   
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldupdate");
        console.log("nextprops", nextProps.timerOn);
        console.log("this props update", this.props.timerOn);
        console.log("next state", nextState);
        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
    }
   


   
    


    // componentDidMount(){
    //     console.log("timerone componenntdidmount");
    //     console.log("---------------------------------");
        
    //     console.log("timer", this.timer);
    // }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("timerone getsnapshotbeforeupdate");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("timerone compoenntdidupdate");  
        console.log("this props mm", this.props);   
        console.log("-------------------------------------");
        console.log("prevo=ius props", prevProps );
        console.log("prevois staste", prevState);
        console.log("snapshot from getsnapshotbeforeupdate", snapShot);
        console.log("timer update",this.timer);
        // if(this.state.time == 10){
        //     clearInterval(this.timer); // working stop inside
        //     console.log("timer updat jjjj", this.timer);
        // }
        // console.log("timer updat jjafter ", this.render);
        console.log("this props", this.props);
        if(prevProps.timerOn != this.props.timerOn){
        if(this.props.timerOn){
            this.timer = setInterval(() => {
                this.setState((prevState) => ({time : prevState.time + 1}))
            }, 400);
                console.log("timer updat jjjj", this.timer);
        }else{
                console.log("timer updat else", this.timer);
            clearInterval(this.timer);
            console.log("timer updat else clear", this.timer);
        }
    }
        
    }
    // componentWillUnmount(){
    //     console.log("timerone componentwillunmount");   
    //     if (this.state.time === 10) {
    //         clearInterval(this.timer);
    //       }
    // }

    render(){
        console.log("timeone render");
        console.log('object', this.state.time);
        console.log("ff", new Date(this.state.time * 1000).toISOString());
        console.log("timer updat jjjrender ",this.timer);
        return (
            <>
        <h1>Time Spent : {new Date(this.state.time * 1000).toISOString().slice(11,19)} </h1>
        {/* {this.timer} */}
        </>
    )
    }
}

export default TimerOne;