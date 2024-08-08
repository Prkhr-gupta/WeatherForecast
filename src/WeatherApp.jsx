import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function WeatherApp() {
    let [error, setError] = useState(false);
    let [info, setInfo] = useState({
        city: "",
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        feelsLike: 0,
        weather: ""
    });

    let updateInfo = (result) => {
        setInfo(result);
    }
    let updateError = (res) => {
        setError(res);
    }

    return (
        <>
            <div>
                <SearchBox updateInfo = {updateInfo} updateError = {updateError}></SearchBox>
                <br />
                {
                    error ? <Alert severity="error">No such place found in our API</Alert> : info.city != "" ? <InfoBox info = {info}></InfoBox> : null
                }
            </div>
        </>
    );
}