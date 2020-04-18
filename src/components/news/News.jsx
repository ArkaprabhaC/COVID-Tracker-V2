import React from 'react';
import {getBBCNews} from '../../api/news-api';
import "./News.css";
import Loader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";

class News extends React.Component {
    
    state = {
        news: []
    }

    override = css`display: block;margin: 50px auto;border-color: red;`;

    async componentDidMount(){
        const data = await getBBCNews();
        this.setState({
            news: data
        })
    }

   render(){
       return (
           <div>
               <p className="news-header font-weight-light text-center" style={{fontSize: "18px"}}>Global News (source: BBC)</p>       
                    {this.state.news.length !== 0 ? 
                        this.state.news.slice(0,5).map((item,index)=>{
                            return (
                                <a href={item.url} className="click-item" rel="noopener noreferrer" target="_blank" key={item+index}  >
                                    <div className="card card-news mb-2" >
                                        <div className="card-body p-2">
                                                <p className="m-0">{item.title}</p>
                                        </div>
                                    </div>
                                </a>
                            );             
                    }) 
                    :  <Loader css={this.override} size={50} color={"#123abc"} loading={true} />}
                  <p className="font-weight-light text-muted mt-3 text-center news-api-attribution">Powered by 
                        <a rel="noopener noreferrer" target="_blank" href="http://newsapi.org"> NewsAPI</a>
                  </p>  
           </div>
       );
   }
};

export default News;