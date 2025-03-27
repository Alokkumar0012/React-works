import React from 'react';
class Dosum extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    dosum(){
        var a = this.state.txt1
        var b = this.state.txt2
        var c = parseInt(a) + parseInt(b)
        this.setState({ ans : "sum is " + c})
    }
    render(){
        return(<>
           <h1> sum </h1>

           No1 : <input type="text" name = 'txt1' onChange={(e)=>this.setState({txt1:e.target.value})}/>
           No2 : <input type="text" name = 'txt1' onChange={(e)=>this.setState({txt2:e.target.value})}/>
           <input type ='button' onClick={this.dosum.bind(this)}value="sum"/>
           {this.state.ans}
        </>)
    }
}

export default Dosum