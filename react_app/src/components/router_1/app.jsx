import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css'
import About from '../../views/router_1/about.jsx'
import Home from '../../views/router_1/home.jsx'
import MyNavLink from '../../components/router_1/my-nav-link.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    
    render() { 
        return ( 
            <div className="app">
                <h1>React Router demo</h1>
                <div>
                    <MyNavLink to='/about'>About</MyNavLink>
                    <MyNavLink to='/home'>Home</MyNavLink>
                </div>
                <div>
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/home' component={Home} />
                        <Redirect to="/about" />
                    </Switch>
                </div>
            </div>
         );
    }
}
 
export default App;