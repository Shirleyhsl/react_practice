import React, { Component } from 'react';
import Axios from 'axios'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            repoName:'',
            repoUrl:''
         }
    }
    componentDidMount(){
        // 使用axios发起请求
        const url = "https://api.github.com/search2/repositories?q=r&sort=stars";
        Axios.get(url).then((res)=>{
            if(res.status===200){
               const result = res.data;
               const repo=result.items[0];
               this.setState({repoName:repo.name,repoUrl:repo.html_url})
            }
        })
        .catch((error)=>{
            alert(error);
        })
        //使用fetch发起请求
        // fetch(url).then(function(response){
        //     return response.json()
        // }).then((res)=>{
        //    const repo = res.items[0];
        //    this.setState({repoName:repo.name,repoUrl:repo.html_url})
        // })
    }
    render() { 
        const {repoName,repoUrl}=this.state;
        if(!repoName){
            return (<h2> LOADING...</h2>);
        }else{
            return(
              <h2>Most star repo is <a href={repoUrl}>{repoName}</a></h2>
            )
        }
       
    }
}
 
export default App;