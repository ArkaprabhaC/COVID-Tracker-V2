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
                <select className="custom-select col-8 d-block mx-auto mb-5 fadeUp" style={{animationDelay:"2.3s"}} onChange={(e)=>{this.props.handleChange(e.target.value)}}>
                    <option value=''>Global</option>
                    {this.state.countries.map((element,index) => {
                        return <option key={element+index} value={element}>{element}</option>
                    })}
                </select>
        );
    }
    
};

export default CountryPicker;