import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/index";


const CountryPicker = ({ handleCountrySelect }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchAPI()
    }, [setFetchedCountries]);

    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue=""
            onChange={(e) => handleCountrySelect(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, key) => (
                    <option key={key} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;