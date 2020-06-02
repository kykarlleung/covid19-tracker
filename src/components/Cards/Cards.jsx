import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = (props) => {
    console.log(props.data.confirmed)
    const lastUpdate = new Date (props.data.lastUpdate).toDateString()
    const dur = 2;

    if(!props.data.confirmed){
        return 'Loading...'
    }
    // { confirmed, recovered, deaths, lastUpdate }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={props.data.confirmed.value}
                                duration={dur}
                                separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={props.data.recovered.value}
                                duration={dur}
                                separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                    </CardContent>
                </Grid>



                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={props.data.deaths.value}
                                duration={dur}
                                separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards