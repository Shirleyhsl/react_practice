import React, { Component } from 'react';
import PropTypes from 'prop-types'
import  'bootstrap/dist/css/bootstrap.min.css'
import  '../../css/search.css'
class Search extends Component {
    static propTypes={
        setSearchName: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    search(){
        const searchContent = this.refs.searchContent.value.trim();
        if (searchContent){
            this.props.setSearchName(searchContent);
        }
    }
    render() { 
        return ( 
            <div className="search-box">
                <p>Search Github Users</p>
                <div className="form-group">
                     <input type="text" ref="searchContent"/>
                     <button type="button" className="btn btn-xs btn-primary" onClick={()=>this.search()}>search</button>
                </div>
            </div>
         );
    }
}
 
export default Search;