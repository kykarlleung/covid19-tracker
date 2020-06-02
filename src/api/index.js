import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


export const fetchAmountData = async(country) => {

    let url2 = url;
    if(country){
        url2 = `${url}/countries/${country}`
    }
    try{
        // const { data } = await axios.get(url);
        // const modifyData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate
        // }
        const { data : { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url2);

        return {confirmed, recovered,deaths, lastUpdate};
    }catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        // console.log(data)
        console.log("API fetch")
        // console.log(modifiedData)
        return modifiedData
    }catch(error){
        console.log(error)
    }
}

export const fetchCountriesData = async () =>{
    try{
        const { data: { countries }} = await axios.get(`${url}/countries`);
        console.log(countries);
        return countries.map((country)=>country.name)
    }catch(error){
        console.log(error)
    }
}