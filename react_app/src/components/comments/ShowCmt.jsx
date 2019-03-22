import React, { Component } from 'react';
import SubShowCmt from './SubShowCmt.jsx';
import PropTypes from 'prop-types'

class ShowCmt extends Component {
   
    static propTypes = {
         comments: PropTypes.array.isRequired
    }
    componentWillMount(){
        // this.comments = JSON.parse(localStorage.getItem('comments'));
        
    }
    delComment= (index)=> {
        const {comments}=this.props;
        comments.splice(index,1);
        this.setState({comments});
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    render() { 
        const {comments}=this.props;
        return ( 
            <div className="showCmt">
                <p>评论回复:</p>
                <ul>
                    {comments.map((item,index) => <SubShowCmt comment={item} key={index} delComment={this.delComment} index={index} />)}
                </ul>
            </div>
         );
    }
}
// ShowCmt.propTypes = {
//     comments: PropTypes.array.isRequired
// }
export default ShowCmt;