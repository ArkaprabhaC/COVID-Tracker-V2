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
               <p className="news-header">News (source: BBC)</p>       
                    {this.state.news.length !== 0 ? 
                        this.state.news.slice(0,5).map((item,index)=>{
                            return (
                                    <div className="card mb-2" key={item+index} >
                                        <div className="card-body p-2">
                                            <a href={item.url}>
                                                <p className="m-0">{item.title}</p>
                                            </a>
                                        </div>
                                    </div>
                            );             
                    }) 
                    :  <Loader css={this.override} size={50} color={"#123abc"} loading={true} />}
           </div>
       );
   }
};

export default News;