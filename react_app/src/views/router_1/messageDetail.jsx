import React, { Component } from 'react';
class Message extends Component {
    render() { 
        const allMessage=[
            {id:1,title:"message001",content:'这是01号消息'},
            {id:2,title:"message002",content:'这是02号消息'},
            {id:3,title:"message003",content:'这是03号消息'},

        ]
        const {id}=this.props.match.params;
        const message=allMessage.find((m)=>m.id===id*1);
        return ( 
            <div>
                <hr/>
                我是MessageDetail
                <ul>
                  <li>ID:{message.id}</li>
                  <li>Title:{message.title}</li>
                  <li>Content:{message.content}</li>
                </ul>
            </div>
         );
    }
}
 
export default Message;