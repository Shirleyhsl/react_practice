import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {incrementCreator, decrementCreator} from './actions.js'


class App extends Component {
    
    static propTypes = {
        counter: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
    }
    increase(){
        const num = this.refs.select.value*1;
        this.props.increment(num);
    };
    decrease(){
        const num = this.refs.select.value*1;
        this.props.decrement(num);
    }
    render() { 
        const {counter} = this.props
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
//这部分代码应该放在containers文件夹下，将样式和redux代码分离，这个代码命名为app.jsx,上面的代码放在component中命名为counter.j
export default connect(
    state => ({counter:state}),
    {increment:incrementCreator,decrement:decrementCreator}
)(App);