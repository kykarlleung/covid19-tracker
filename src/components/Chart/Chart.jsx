import React, { useState, useEffect } from 'react';
import { fetchDailyData, fetchCountriesData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
    //hook
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log("Chart: " + dailyData)
        console.log("Charts")
        fetchAPI()
    }, [setDailyData]);

    const lineChart = (
        dailyData.length !== 0
            ?
            (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333FF',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }],
                }}
            />) : null
    );
    console.log(confirmed, recovered, deaths)
    const barChar = (
        confirmed
        ?(
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,225,0.5)','rgba(0,225,225,0.5)','rgba(225,0,0,0.5)'],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `${country}`}
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country? barChar : lineChart}
        </div>
    )
}

export default Chart