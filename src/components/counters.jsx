import React, { Component } from 'react';
import Counter from './counter';

class Counters  extends Component {
   
    render() { 
        const {onReset,counters,onDelete,onIncrement} = this.props;
        return (
                <div>
                <button onClick={onReset} className="btn btn-primary btn-m m-2">Reset</button>
                <br/>
                {counters.map( counter => 
                <Counter 
                    key={counter.id}
                    onDelete={onDelete}
                    counter = {counter}
                    onIncrement={onIncrement}
                >  </Counter>)}
                
                
        </div>  );
    }
}
 
export default Counters ;
 