import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom'
// import App from './components/comments/app.jsx';
// import App from './components/search_1/app.jsx'
// import App from './components/search_2_props/app.jsx'
// import App from './components/search_2_pubsubjs/app.jsx'
// import App from './components/router_1/app.jsx'
// import App from './components/react-ui/app.jsx'
import App from './components/redux_react_redux/app.jsx';
import store from './components/redux_react_redux/store.js'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
//有路由结构需要这么写

