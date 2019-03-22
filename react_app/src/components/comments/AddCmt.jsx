import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

class AddCmt extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments:props.comments,
         }
    }
    
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    handleSubmit(){
        let name = this.refs.name.value;
        let comment = this.refs.comment.value;
        if (name === '' || comment===''){
            alert('请填写完整信息');
        }
        else{
            comment={name,comment}
            this.props.addComment(comment);
        }
    }

    render() { 
        return ( 
            <div className = "wirteCmt">
                    <div className="form-group">
                        <label htmlFor="name">用户名</label>
                            <input type="text" className="form-control" id="name" placeholder="用户名" ref="name" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="name"> 评论内容 </label>
                        <textarea row={10} className="form-control" placeholder="评论内容" ref="comment" />
                    </div>
                    <div className="form-group text-right">
                        <button type="button" className="btn btn-primary" onClick={()=>this.handleSubmit()}>提交</button>
                     </div>
            </div>
         );
    }
}


export default AddCmt;