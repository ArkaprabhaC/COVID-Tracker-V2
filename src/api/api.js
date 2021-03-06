import axios from 'axios';

// Get Country wise Statistics. Courtesy of api-football.com
export const getCountryStats = async (country) => {
    const {data} = await axios.get(`https://corona.lmao.ninja/v2/countries/${country}`);
    return data;
}

// getCountryStats("India");
export const getCountries = async () => {
    const {data} = await axios.get('https://corona.lmao.ninja/v2/countries');
    const countryList = data.map(item => item.country);
    return countryList;
}

/*TO CHANGE THE BELOW FUNCTION */
export const getCountryHistory = async (country) => {
    const result = axios.get(`https://corona.lmao.ninja/v2/historical/${country}`)
        .then(({data:{timeline}})=>{
            return timeline;
        })
        .catch((err)=>{
            return err.response.status
        });
   
    return result;
}






// Get Global Statistics. Courtesy of corona.lmao.ninja
export const getGlobalStats = async () => {
    const {data} = await axios.get('https://corona.lmao.ninja/v2/all');
    return data;
}

export const getGlobalDaily = async () => {
    const {data} = await axios.get("https://covid19.mathdro.id/api/daily");

    const object = {
            "cases": {},
            "deaths": {},
            "recovered":{} 
    }

    data.slice(data.length-50).map((el)=>{
        const {reportDate,confirmed,recovered,deaths} = el;
        
        object.cases[reportDate] = confirmed.total > 10000 ? confirmed.total/10000 : confirmed.total ;
        object.deaths[reportDate] = deaths.total > 1000 ? deaths.total/1000 : deaths.total;
        object.recovered[reportDate] = recovered.total > 1000 ? recovered.total/1000 : recovered.total;

        return 1;
    })

    return object;
}
