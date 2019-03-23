import React, { Component } from 'react';
import * as actions from './actions.js';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
    }
    increase(){
        const num = this.refs.select.value*1;
        this.props.store.dispatch(actions.incrementCreator(num))
    };
    decrease(){
         const num = this.refs.select.value*1;
        this.props.store.dispatch(actions.decrementCreator(num))
    }
    render() { 
        const counter = this.props.store.getState();
        return ( 
            <div>
                <p>Click {counter} Times</p>
                <div>
                    <select ref="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    &nbsp;
                    <button onClick={()=>this.increase()}>+</button>
                    &nbsp;
                    <button onClick={()=>this.decrease()}>-</button>
                </div>
            </div>
         );
    }
}
 
export default App;