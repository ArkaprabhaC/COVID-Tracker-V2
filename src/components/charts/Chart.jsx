import React from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';

const Chart = (props) => {
    
    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false
        },
        elements: {
            point: {
              radius: 1,
            },
            
        },
        layout: {
            padding: {
              left: 10,
              right: 10,
              top: 0,
              bottom: 10,
            },
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                  unit: 'day',
                  tooltipFormat: 'MMM DD',
                  stepSize: 7,
                },
                display: true,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks:{
                    fontSize:11,
                }
            }],
            yAxes: [{
                position:'right',
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
          },
    };

    const barChart = (
            props.daily.cases ? 
                (<div className="fadeUp mb-5" style={{animationDelay:"1.6s"}}>
                   
                    <div className="chart-container col-md-8 col-12 mx-auto" style={{height:"11rem"}}>
                        <p className="font-weight-light text-center" style={{fontSize:"20px"}}>Cumulative Infection Rate</p>
                        <Line
                            data={{
                                labels: [...Object.keys(props.daily.cases)],  //indicates data in x direction! //label accepts array
                                datasets: [{
                                    data: [...Object.values(props.daily.cases)],
                                    label: "Infected",
                                    borderColor: "blue",
                                    backgroundColor: 'rgba(0,0,255,0.7)',
                                    fill:true
                                }]
                                
                            }}
                            options={chartOptions}
                            
                        />
                    </div>

                    <div className=" chart-container col-md-8 col-12 mx-auto" style={{height:"11rem"}}>
                        <p className=" font-weight-light text-center" style={{fontSize:"20px"}}>Cumulative Death Rate</p>
                        <Line
                            data={{
                                labels: [...Object.keys(props.daily.deaths)],  //indicates data in x direction! //label accepts array
                                datasets: [{
                                    data: [...Object.values(props.daily.deaths)],
                                    label: "Deaths",
                                    borderColor: 'red',
                                    backgroundColor: 'rgba(255,0,0,0.7)',
                                    fill:true
                                }]
                            }}
                            options={chartOptions}
                            
                        />
                    </div>
                    
                    <div className="col-md-8 col-12 mx-auto" style={{height:"11rem"}}>
                        <p className=" font-weight-light text-center" style={{fontSize:"20px"}}>Cumulative Recovery Rate</p>
                        {props.daily.recovered[Object.keys(props.daily.recovered)[0]] !== 0 ? 
                              (  <Line
                                    data={{
                                        labels:  [...Object.keys(props.daily.recovered)],  //indicates data in x direction! //label accepts array
                                        datasets: [{
                                            data:  [...Object.values(props.daily.recovered)],
                                            label: "Recovered",
                                            borderColor: 'green',
                                            backgroundColor: 'rgba(0,255,0,0.7)',
                                            fill:true
                                        }]
                                    }}
                                    options={chartOptions}
                                /> )
                            :(
                                <p className="mt-2 text-center font-weight-light">No Data Available...</p>
                            )
                        }
                    </div>

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