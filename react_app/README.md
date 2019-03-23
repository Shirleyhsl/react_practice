This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# 笔记
## 环境配置
* 全局安装 `create-react-app`: `cnpm install -g create-react-app`
    * 查看是否已经下载过：`npm root -g`查看全局下载的根目录，然后进入对应文件夹查看
* 初始化项目：`create-react-app react_app`

## 练习1：发表评论删除评论的功能

## 练习2：根据指定的关键字，在github上搜索匹配最受关注的库
* 显示库名，点击链接查看库
* 测试接口：https://api.github.com/search/repositories?q=r&sort=stars
* 方式1：使用axios
    * 装包 `cnpm i --save axios`
    ```js
    import Axios from 'axios'
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

    ```
* 方式2：使用fetch
    ```js
     fetch(url).then(function(response){
            return response.json()
        }).then((res)=>{
           const repo = res.items[0];
           this.setState({repoName:repo.name,repoUrl:repo.html_url})
        })
    ```
## 练习3：搜索关键字
### 父子组件通信
* 方式1：通过Props传递
    1. 共同的数据放在父组件上特有的数据放在自己组件内部（state）
    2. 通过props可以传递一般数据和函数数据，只能一层一层传
    3. 一般数据-->父组件传递数据给子组件-->子组件读取数据
    4. 函数数据-->子组件传递数据给父组件-->子组件调用函数
* 方式2：使用消息订阅(subscribe)-发布(publish)机制
  工具：PubSubJS
    * 下载
    * 发布消息
        在事件发生的地方发布消息,数据
        ```js
        import PubSub from 'pubsub-js'
        //消息名字，消息内容
        PubSub.publish('search', searchContent);
        ```
    * 订阅消息
      在需要用到新数据的地方订阅消息
      ```js
        import Axios from 'axios'
        import PubSub from 'pubsub-js'  
        //订阅消息search
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
      ```


## 前台路由
### 单层路由
* 载包:web版的router： `cnpm i --save react-router-dom`
* 设置路由
    ```js
    //index.js
    import {BrowserRouter} from 'react-router-dom';
    //有路由结构需要这么写
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
    //组件代码
    import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
    //路由链接
    <NavLink to='/about' className="activeClass">About</NavLink>
    <NavLink to='/home'>Home</NavLink>
    //切换子组件及默认进入的重定向
    <Switch>
        //switch表示只有匹配中的才显示对应的component
        <Route path='/about' component={About} />
        <Route path='/home' component={Home} />
        <Redirect to="/about" />
    </Switch>
    ```
### 嵌套路由
* 和单层路由类似,在home组件中写相同的路由代码
```js
 <ul class="nav nav-tabs">
    <li>
        <MyNavLink to="/home/news">News</MyNavLink>
    </li>
    <li>
        <MyNavLink to="/home/message">Messages</MyNavLink>
    </li>
</ul>
<div>
    <Switch>
        <Route path="/home/news" component={News}/>
        <Route path="/home/message" component={Message}/>
        <Redirect to="/home/news" />
    </Switch>
</div>
```
### 向路由组件传递数据
* 父组件中的定义a链接，在Route中用占位符表示动态的参数
* 在子组件中就可以通过`this.props.match.params.***`获取url上的占位符值
```js
//父组件
//方式二的函数
showDetail(id){
    this.props.history.push('/home/message/messagedetail/' + id);
}

 <div>
    我是Message组件
        <ul>
        {
            this.state.messages.map((item,index)=>(
                <li key={index}>
                    //方式一：使用NavLink
                    <NavLink to={'/home/message/messagedetail/'+item.id}>{item.title}</NavLink>
                    &nbsp;&nbsp;&nbsp;
                    //方式二：使用button触发函数
                    <button onClick={(index)=>this.showDetail}>查看</button>
                </li>
            ))
        } 
        </ul>
        <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
</div>
//子组件
 const {id}=this.props.match.params;
```

## 最流行的React-UI库
1. [material-ui(国外)](https://material-ui.com/)
2. [ant-design(蚂蚁金服)](https://ant.design/)
* 使用参照官方文档，很详细

## Redux
* [官方文档](https://www.redux.org.cn/)
* 不是react插件，其它框架也可以用，react用的比较多
* 是什么？
    * redux是一个独立专门用于做状态管理的JS库，管理react应用中多个组件共享的状态
* 谷歌插件管理redux的数据
    * 谷歌安装 `redux-devtools` 插件
    * 项目中安装`cnpm i --save redux-devtools-extension`,`cnpm i --save redux-thunk`
    * 编码
    ```js
    import {createStore, applyMiddleware} from 'redux';
    import thunk from 'redux-thunk'
    import {composeWithDevTools} from 'redux-devtools-extension'
    const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)));
    ```
