import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom'
import MessageDetail from '../../views/router_1/messageDetail.jsx'
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages:[
               
            ]
         }
    }
    componentDidMount(){
        //模拟发送ajax请求异步获取数据
        setTimeout(()=>{
            const messages=[
                {id:1,title:'message01'},
                {id:2,title:'message02'},
                {id:3,title:'message03'}
            ]
            this.setState({messages});
        },1000)
    }
    showDetail(id){
        this.props.history.push('/home/message/messagedetail/' + id);
    }
    render() { 
        return ( 
            <div>
                我是Message
                <ul>
                   {
                     this.state.messages.map((item,index)=>(
                         <li key={index}>
                            {/* <a href={'/home/message/messagedetail/'+item.id}>{item.title}</a> */}
                            <NavLink to={'/home/message/messagedetail/'+item.id}>{item.title}</NavLink>
                             &nbsp;&nbsp;&nbsp;
                             <button onClick={()=>this.showDetail(item.id)}>查看</button>
                         </li>
                     ))
                   } 
                </ul>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
            </div>
         );
    }
}
 
export default Message;