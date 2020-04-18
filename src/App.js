import React from 'react';
import {Card,Chart,CountryPicker,News} from './components/index';
import {getGlobalStats,getGlobalDaily, getCountryStats, getCountryHistory} from './api/api';
import './App.css';

class App extends React.Component{
    state = {
        stats: {},
        daily: {},
        country: '',
        load: false
    }
  
    async componentDidMount(){
        this.handleGlobalData();
    }
    
    handleGlobalData = async () => {
        const data = await getGlobalStats(); 
        const dailyData = await getGlobalDaily();
        
        this.setState({
            stats: data,
            daily: dailyData,
            load: true
        });
    }

    handleCountryChange = async (country) => {
        
        if(country==="Global"){
            this.handleGlobalData();
        }else{
            const data = await getCountryStats(country);
            const dailyData = await getCountryHistory(country);
            
            if(dailyData !== "404"){
                this.setState({
                    stats:data,
                    daily: dailyData,
                    country: country
                });
            }else{
                this.setState({
                    daily: {},
                    country: country
                });
            }
        }

    }
    
     
    getUTCTime = () => {
        const date = new Date(this.state.stats.updated);
        const UTCHour = date.getUTCHours();
        const UTCMins = date.getUTCMinutes();

        const hours = UTCHour < 10 ? '0'+UTCHour : UTCHour;
        const mins = UTCMins < 10 ? '0'+UTCMins : UTCMins;

        return `${hours}:${mins} UTC`;
           
    }
    render(){
        return(
            <div className="container-xl">
                <div className="row">

                    <div className="col-md-8 col-12 stage-1">
                           
                            <div className="row fadeUp" style={{animationDelay:"1.5s"}}>
                                <div className="col-8">
                                    <h2 className="text-left header-main font-weight-bold">
                                        <span className="p-2">COVID-19</span>
                                    </h2>
                                </div>
                                <div className="col-4 text-muted text-right lastUpdated">
                                    <p className="m-0">Last Updated</p> 
                                    <p className="m-0">{new Date(this.state.stats.updated).toDateString()}</p>
                                    <p className="m-0">{this.getUTCTime()}</p>
                                </div>
                            </div>
                        
                            <CountryPicker handleChange={this.handleCountryChange} />   
                            <Card stats = {this.state.stats} />  
                            <Chart stats = {this.state.stats} daily={this.state.daily} /> 
                    </div>
                    
                    <div className="col-md-4 col-12 stage-2 fadeUp" style={{animationDelay:"1.2s"}}>
                         <News/>
                         <footer className="mt-3 footer">
                            <div className="container pt-3">
                                <p className="text-center font-weight-light mb-4 footer-credits">By <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/arkaprabha-chatterjee-83483a167/"><span style={{"borderBottom":"3px solid #ffc107"}}>Arkaprabha Chatterjee</span></a></p>
                                <p className="text-center font-weight-light mt-2 mb-0 call-for-devs-1">Want to improve this app? </p>
                                <p className="text-center font-weight-light mt-1 call-for-devs-2">I would love to talk to you! </p>
                                <p className="text-center font-weight-light mt-0">Drop a mail <a rel="noopener noreferrer" target="_blank" href="mailto:arkaprabha.chatterjee31@gmail.com">
                                    here</a></p>
                            </div>
                        </footer>
                    </div>         
                </div>
            </div> 
        );
    }
}

export default App;