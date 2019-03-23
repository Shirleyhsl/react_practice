import React, { Component } from 'react';
import MyNavLink from '../../components/router_1/my-nav-link.jsx'
import {Switch,Route,Redirect} from 'react-router-dom'
import Message from '../../views/router_1/message.jsx'
import News from '../../views/router_1/news.jsx'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>我是Home</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Messages</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/message" component={Message}/>
                            <Redirect to="/home/news" />
                        </Switch>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;