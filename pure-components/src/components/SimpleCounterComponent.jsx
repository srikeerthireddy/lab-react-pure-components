import { Component } from "react";

class SimpleCounterComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            toggleStatus:false,
        };
    }
    handleInc=()=>{
        if(!this.state.toggleStatus){
            
        
       this.setState({...this.state,count:this.state.count+1});
        }else{
            this.setState({...this.state,count:this.state.count})
        }
    };
    handleToggle=()=>{
        this.setState({...this.state,toggleStatus:!this.state.toggleStatus});
    }

    render(){
        console.log("This is Simple Component", this.state.toggleStatus);
        return(
            <>
            <div>
                <h2>Simple Component</h2>
                <h4>{this.state.count}</h4>
                </div>
                <div>
                <button onClick={this.handleToggle}>Set Toggle</button>
                <button onClick={this.handleInc}>Increment</button>
                </div>
            </>
        )
    }
}

export default SimpleCounterComponent;