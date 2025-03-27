import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {counter : 0 }
    }
    icrementData(){
        if(this.state.counter>=5){
            this.setState({msg:"sorry >5"})
        }else{
            this.setState({counter:this.state.counter+1,msg: ''})
        }
    }
    derementData(){
        if(this.state.counter<=5){
            this.setState({msg:"sorry < 5",isDis:true})
        }else{
            this.setState({counter:this.state.counter-1,msg: ''})
        }
    }
    resetData = () => {
        this.setState({ counter: 0, msg: "reset" });
      };
    render(){
        return(<>
            <h1>Counter</h1>
            value is {this.state.counter}
            <br/>
            <input type='button' value="+"
            onClick={this.icrementData.bind(this)}/>

            <input type='button' value = "-"
            onClick={this.derementData.bind(this)}/>

            <input type='button' value='reset'
             onClick={this.resetData.bind(this)}/>


            <p style={{color:'Red'}}>{this.state.msg}</p>
            </>)
        }
    }
export default Counter



