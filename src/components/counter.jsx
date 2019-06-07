import React, { Component } from 'react';



 class Counter extends Component {
    state = { 
        value: this.props.counter.value,
      
    };
 
 
    
 
    render() {
        //console.log(this.props.id);
        return (
             <React.Fragment>
                 <span  className={this.getBadgeClasses()}>{ this.formatCount()}</span>
                 <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn secondry-btn btn-sm m-2"   
                 >Click me</button>
                 <button 
                    className="btn btn-danger btn-sm m-2"
                    onClick = {() => this.props.onDelete(this.props.counter.id)}
                 >Delete</button>
                 <br />
             </React.Fragment>
        );
    }
     getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += this.props.counter === 0 ? "warning" : "primary";
         return classes;
     }

    formatCount() {
        const { value: count } = this.props.counter;
        return count == 0 ? 'Zero' : count;
    } 
}



 
export default Counter;