import axios from 'axios';

interface Req {
    key: string;
    limit: string;
}

const baseURL = "https://api.hgbrasil.com"
const clima =  async (req: Req)  => {
    const response = await axios.get(
        // "https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,condition,description,date,currently,time,forecast,humidity,max,min,date,weekday&key=3944221a"
        `${baseURL}/weather?${req.limit}&fields=only_results,temp,city_name,condition,description,date,currently,time,forecast,humidity,max,min,date,weekday&${req.key}`
    ).then((data: any) =>{
        return { 
            status: data.status, 
            data: data.data 
        }
    });
    return response;
}

const index = {
    clima
}

export default index