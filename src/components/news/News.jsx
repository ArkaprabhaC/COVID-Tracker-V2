import React from 'react';
import {getBBCNews} from '../../api/news-api';
import "./News.css";

class News extends React.Component {
    
    state = {
        news: []
    }

    async componentDidMount(){
        const data = await getBBCNews();
        this.setState({
            news: data
        })
    }


   render(){
       return (
           <div>
               <p className="news-header">News (source: BBC)</p>       
                    {this.state.news.slice(0,5).map((item,index)=>{
                        return (
                                <div className="card mb-2" key={item+index} >
                                    <div className="card-body p-2">
                                        <a href={item.url}>
                                            <p className="m-0">{item.title}</p>
                                        </a>
                                    </div>
                                </div>
                            );             
                    })}
           </div>
       );
   }
};

export default News;