import axios from 'axios';

export const getBBCNews = async () => {
    const fromDate = new Date();
    const toDate = new Date();

    fromDate.setDate(fromDate.getDate()-2);
    toDate.setDate(toDate.getDate()-1);
    
    const url = `https://newsapi.org/v2/everything?q=Coronavirus&sortBy=popularity&from=${fromDate.toDateString()}&to=${toDate.toDateString()}&sources=bbc-news&apiKey=1d8865623f7148d983efe80c2aa2aaef`;
    const {data: {articles}} = await axios.get(url);
    return articles;

} 