import React from 'react';
import './CountryPicker.css';
import {getCountries} from '../../api/api';

class CountryPicker extends React.Component {
    
    state = {
        countries: []
    }
    
    async componentDidMount(){
        const data = await getCountries(); 
        this.setState({
            countries: data
        });
    }

    render(){
        return (
                <select className="custom-select col-8 col-md-5 d-block mx-auto fadeUp" style={{animationDelay:"1.8s"}} onChange={(e)=>{this.props.handleChange(e.target.value)}}>
                    <option value='Global'>Global</option>
                    {this.state.countries.map((element,index) => {
                        return <option key={element+index} value={element}>{element}</option>
                    })}
                </select>
        );
    }
    
};

export default CountryPicker;