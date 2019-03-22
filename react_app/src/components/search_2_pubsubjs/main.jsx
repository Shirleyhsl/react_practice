import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Axios from 'axios'
import PubSub from 'pubsub-js'

import  'bootstrap/dist/css/bootstrap.min.css'

class Main extends Component {

    static propTypes = {
        searchName: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = { 
            initView:true,
            loading:false,
            users:null,
            errorMsg:null,
         }
    }
    componentDidMount(){
        //订阅消息search
        PubSub.subscribe('search',(data,searchName)=> {
             this.setState({
                 initView: false,
                 loading: true,
             });
            let url='https://api.github.com/search/users?q='+searchName;
            Axios.get(url).then(res=>{
                const result=res.data;
                const users= result.items.map(item=>({name:item.login,url:item.html_url,avatarUrl:item.avatar_url}))
                this.setState({
                    loading: false,
                    users
                })
            }).catch(err=>{
                this.setState({loading:false,errorMsg:err.message});
            })     
        })
    }

    render() { 
        const{initView,loading,users,errorMsg}=this.state;
        if (initView){
            return <h2>请输入关键字搜索</h2>
        }else if(loading){
            return <h2>正在搜索中...</h2>

        }else if(errorMsg){
            return <h2>{errorMsg}...</h2>
        }else{
            return ( 
                <div className="row">
                    {
                        users.map((user,index)=>(
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank" rel="noopener noreferrer">
                                    <img src={user.avatarUrl} style={{width:100}} alt="" />
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        )
                        )
                    }
                </div>
            );
        }
        
    }
}
 
export default Main;