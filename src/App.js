import React from "react";
import ComponentA from "./Components/Component/ComponentA";
import TimerOne from "./Components/Timer/TimerOne";
// import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      timerOn: false
    }
  }
  handleTimerOn =() => {
    this.setState((prevState) => ({timerOn: !prevState.timerOn}))
  }
  render() {
    return (
      <>
        {/* <h1>App</h1>   */}
        {/* <ComponentA /> */}
        {/* <button onClick={this.handleMount}>{this.state.mount ? "UNMOUNT" : "MOUNT"}</button>
       {this.state.mount ?  <TimerOne /> : null} */}
       <TimerOne  timerOn={this.state.timerOn}/>
       <button onClick={this.handleTimerOn}>{this.state.timerOn ? "STOP" : "START" }</button>
      </>
    );
  }
}

export default App;
