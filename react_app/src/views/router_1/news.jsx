import React, { Component } from 'react';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newArray:[
                'news001',
                'news002',
                'new0s03'
            ]
          }
    }
    render() { 
        return ( 
            <div>
                我是News
                <ul>
                    {
                        this.state.newArray.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
         );
    }
}
 
export default News;