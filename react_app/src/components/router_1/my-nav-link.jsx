import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class MyNavLink extends Component {
    state = {  }
    render() { 
        return ( 
            <NavLink {...this.props} activeClassName="activeClass"></NavLink>
         );
    }
}
 
export default MyNavLink;