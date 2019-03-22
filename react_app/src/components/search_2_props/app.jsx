import React, { Component } from 'react';
import Main from './main.jsx'
import Search from './search.jsx'
import  'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchName:''
         }
    }
    setSearchName=(searchName)=> {
        this.setState({searchName});
        // this.searchName = searchName;
    }
    render() { 
        return ( 
            <div className="app">
                <Search setSearchName={this.setSearchName} / >
                <hr/>
                <Main searchName={this.state.searchName} />
            </div>
         );
    }
}
 
export default App;