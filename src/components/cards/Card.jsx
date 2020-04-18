import React, {Fragment} from 'react';
import CountUp from 'react-countup';
import './Card.css';
import Loader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";

class Card extends React.Component {

    override = css`display: block;margin: 0 auto;border-color: red;`;

    render(){
        
        return (
        
            <div className="row justify-content-center my-5 mx-0 fadeUp" style={{animationDelay:"2s"}}>
                
                    {!this.props.stats.cases ? 
                      (
                         <div className="my-2">
                           <Loader css={this.override} size={50} color={"#123abc"} loading={true} /> 
                          </div>
                      )
                    : (  <Fragment>
                            <div className="col-md-4 col-9 mb-3 px-2">
                              <div className="card">
                                <div className="card-body p-3 confirmed">
                                    <h5 className="card-title text-primary font-weight-light">Confirmed</h5>
                                    <p className="card-text m-0">
                                        <CountUp 
                                            className="text-primary font-weight-bold mb-1"
                                            start={0} 
                                            end={this.props.stats.cases} 
                                            duration={2.5}
                                            separator=","
                                            style={{fontSize:"24px"}}
                                        />
                                    </p>
                                    <p className="card-text m-0">  
                                        <span className="text-primary font-weight-light" >New +
                                            <CountUp 
                                                start={0} 
                                                end={this.props.stats.todayCases} 
                                                duration={2.5}
                                                separator=","
                                                
                                            />
                                        </span>
                                    </p>                
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4 col-9 mb-3 px-2">
                    
                            <div className="card">
                                <div className="card-body p-3 recovered">
                                    <h5 className="card-title text-success font-weight-light">Recovered</h5>
                                    <p className="card-text m-0">
                                        <CountUp 
                                            className="text-success font-weight-bold"
                                            start={0} 
                                            end={this.props.stats.recovered}
                                            duration={2.5}
                                            separator=","
                                            style={{fontSize:"24px"}}
                                        />
                                    </p>
                                    <p className="card-text m-0">  
                                        <span className="text-success font-weight-light" >Tests +
                                            <CountUp 
                                                start={0} 
                                                end={this.props.stats.tests} 
                                                duration={2.5}
                                                separator=","
                                                
                                            />
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4 col-9 mb-0 mb-3 px-2">
                        
                            <div className="card">
                                <div className="card-body p-3 deaths">
                                    <h5 className="card-title text-danger font-weight-light">Deaths</h5>
                                    <p className="card-text m-0">
                                        <CountUp 
                                            className="text-danger font-weight-bold"
                                            start={0} 
                                            end={this.props.stats.deaths}  
                                            duration={2.5}
                                            separator=","
                                            style={{fontSize:"24px"}}
                                            
                                        />
                                    </p> 
                                    <p className="card-text m-0">  
                                        <span className="text-danger font-weight-light" >New +
                                            <CountUp 
                                                start={0} 
                                                end={this.props.stats.todayDeaths} 
                                                duration={2.5}
                                                separator=","
                                                
                                            />
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>
                
                        </div>
                      </Fragment>
                    )}
    
            </div>
            
           );
        }
};

export default Card