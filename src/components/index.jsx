import React, { Component } from 'react';
import Counters from './counters';
import NavBar from './navBar';

class Index extends Component{
    state = {
        counters:[
    
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
      };
      onDelete = counterID => {
         let counters = this.state.counters.filter(c=> c.id !== counterID);
         this.setState({counters});
        }
        onIncrement = counter => {
        const counters = [...this.state.counters]; 
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
      }
      onReset = () => {
        const counters = this.state.counters.map( c => {
            c.value=0;
            return c;
        });
        this.setState({counters});
        
    };
    render(){
        return (
         <React.Fragment>
           <NavBar total = {this.state.counters.filter(c => c.value > 0 ).length}/>
           <Counters 
            counters = {this.state.counters}
            onDelete = {this.onDelete}
            onIncrement = {this.onIncrement}
            onReset = {this.onReset} 
           
           />
         
         
         </React.Fragment>
        );
        }
}
export default Index;