import React, { Component } from 'react';
import AddCmt from './AddCmt.jsx';
import ShowCmt from './ShowCmt.jsx'
class App extends Component {
     constructor(props) {
        super(props);
        let comments=[];
        if (localStorage.getItem('comments') && localStorage.getItem('comments')!==undefined) {
            comments = JSON.parse(localStorage.getItem('comments'));
        }
        this.state = { comments }
    }
    addComment= (comment)=> {
        const {comments}=this.state;
        comments.unshift(comment);
        this.setState({comments});
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    
    
    render() { 
        return (  
            <div>
                <h1 className="cmt-title">请发表对React的评论</h1>
                <div className="comment-box">
                    <AddCmt addComment={this.addComment}></AddCmt>
                    <ShowCmt comments={this.state.comments}></ShowCmt>
                </div>
            </div>
        );
    }
}
 
export default App;