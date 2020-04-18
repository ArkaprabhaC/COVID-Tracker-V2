import axios from 'axios';

// Get Country wise Statistics. Courtesy of api-football.com
export const getCountryStats = async (country) => {
    const {data: {response }} = await axios.get('https://covid-193.p.rapidapi.com/statistics',{
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-193.p.rapidapi.com",
            "x-rapidapi-key":"6908fef360mshc4b88f35bab7e5cp1386ccjsn9584b7a14b20"
        },"params":{
            "country": country
        }
    });
    
    const object = {
        "updated": new Date(response[0].time).getTime(),
        "cases": response[0].cases.total,
        "todayCases": response[0].cases.new === null ? 0 : response[0].cases.new,
        "deaths": response[0].deaths.total,
        "todayDeaths": response[0].deaths.new === null ? 0 : response[0].deaths.new,
        "recovered":response[0].cases.recovered,
        "tests": response[0].tests.total === null ? 0 : response[0].tests.total
    }
    
    return object;
}
// getCountryStats("India");
export const getCountries = async () => {
    const {data: {response}} = await axios.get('https://covid-193.p.rapidapi.com/countries',{
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-193.p.rapidapi.com",
            "x-rapidapi-key":"6908fef360mshc4b88f35bab7e5cp1386ccjsn9584b7a14b20"
        }
    });


    return response; 
}
export const getCountryHistory = async (country) => {
    const {data:{response}} = await axios.get('https://covid-193.p.rapidapi.com/history',{
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-193.p.rapidapi.com",
            "x-rapidapi-key":"6908fef360mshc4b88f35bab7e5cp1386ccjsn9584b7a14b20"
        },"params":{
            "country": country
        }
    });
    
    const result = response.map((item)=>{ 
        const object = {
            "reportDate": item.day,
            "confirmed": {"total" : item.cases.total},
            "deaths": {"total": item.deaths.total},
            "recovered": {"total":item.cases.recovered}
        };

        return object;
    }).reverse();

    //console.log("resp is ", result);
    return result;
}






// Get Global Statistics. Courtesy of corona.lmao.ninja
export const getGlobalStats = async () => {
    const {data} = await axios.get('https://corona.lmao.ninja/v2/all');
    return data;
}

export const getGlobalDaily = async () => {
    const {data} = await axios.get("https://covid19.mathdro.id/api/daily");
    return data;
}
