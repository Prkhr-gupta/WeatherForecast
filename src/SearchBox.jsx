import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchBox({updateInfo, updateError}){
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a08fb76d2fb601a00c258b592ef874d5";

    async function getWeatherInfo(){
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            updateInfo(result);
            updateError(false);
        } catch(err){
            updateError(true);
        }
    }

    function handleForm(event){
        setCity(event.target.value);
    }

    async function formSubmit(event){
        event.preventDefault();
        setCity("");
        await getWeatherInfo();
    }

    return (
        <div>
            <h2>Search for the Weather in your City</h2>
            <form onSubmit={formSubmit}>
            <div>
                <TextField id="city" label="City Name" variant="outlined" name="city" value={city} onChange={handleForm} required/>
            </div>
            <br /> <br />
            <div>
            <Button variant="contained" type="submit">Check Weather</Button>
            </div>
        </form>
        </div>
    );
}