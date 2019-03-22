import React, { Component } from 'react';
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.css'

class SubShowCmt extends Component {
   
     static propTypes = {
         comment: PropTypes.object.isRequired,
         delComment: PropTypes.func.isRequired
     }
     delCmt(){
         this.props.delComment(this.props.index)
     }
    render() { 
         const {comment}=this.props;
        return ( 
           <li className="item">
                <p>{comment.name}说：</p>
                <p>{comment.comment}</p>
                <button type="button" className="btn btn-primary" onClick={() => this.delCmt()}>删除</button>
            </li>
         );
    }
}
 
export default SubShowCmt;