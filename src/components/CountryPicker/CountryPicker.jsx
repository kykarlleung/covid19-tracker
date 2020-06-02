import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountriesData } from '../../api'

const CountryPicker = (props) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchC = async () => {
            setFetchedCountries(await fetchCountriesData())
        }
        fetchC();
    }, [setFetchedCountries])

    console.log(fetchedCountries)

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e.target.value)}>
                <option className={styles.option} value="">Global</option>
                {fetchedCountries.map((country, i) =>
                    <option
                        className={styles.option}
                        key={i}
                        value={country}>
                        {country}
                    </option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker