import React from 'react';
import {Line} from 'react-chartjs-2';

const Chart = (props) => {
    
    const barChart = (
            props.daily.length ? 
                (<div className="fadeUp" style={{animationDelay:"1.7s"}}>
                    <p className="font-weight-light text-center" style={{fontSize:"20px"}}>Total Infected</p>
                    <Line
                        data={{
                            labels: props.daily.slice(props.daily.length-5).map((el)=> el.reportDate),  //indicates data in x direction! //label accepts array
                            datasets: [{
                                data: props.daily.slice(props.daily.length-5).map((el)=> el.confirmed.total),
                                label: "Infected",
                                borderColor: '#3333ff',
                                fill:true
                            }]
                        }}
                        
                        
                    />
                    
                    <p className="mt-5 font-weight-light text-center" style={{fontSize:"20px"}}>Total Deaths</p>
                    <Line
                        data={{
                            labels: props.daily.slice(props.daily.length-5).map((el)=> el.reportDate),  //indicates data in x direction! //label accepts array
                            datasets: [{
                                data: props.daily.slice(props.daily.length-5).map((el)=> el.deaths.total),
                                label: "Deaths",
                                borderColor: 'red',
                                backgroundColor: 'rgba(255,0,0,0.7)',
                                fill:true
                            }]
                        }}
                        
                    />
                    <p className=" mt-5 font-weight-light text-center" style={{fontSize:"20px"}}>Total Recovered</p>
                    
                    {props.daily[0].recovered.total !== 0 ? 
                            <Line
                                data={{
                                    labels: props.daily.slice(props.daily.length-5).map((el)=> el.reportDate),  //indicates data in x direction! //label accepts array
                                    datasets: [{
                                        data: props.daily.slice(props.daily.length-5).map((el)=> el.recovered.total),
                                        label: "Recovered",
                                        borderColor: 'green',
                                        backgroundColor: 'rgba(0,255,0,0.7)',
                                        fill:true
                                    }]
                                }}
                                
                            />
                        :(
                            <p className="mt-2 text-center font-weight-light">No Data Available...</p>
                        )
                    }

                  </div>
                ) : null
    );

    return (
        <div className="col-12 mx-auto">
            {barChart}
        </div>
    );
};

export default Chart;