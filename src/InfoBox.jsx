import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const HOT_URL = "https://images.unsplash.com/photo-1561518742-cd79b7ca5090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXIlMjBjaXR5fGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1553018622-b3e38e625798?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWR5JTIwd2VhdGhlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D";
    
    return(
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 445 }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} 
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>} </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <div className='weatherInfo'>Temperature = {info.temp} &deg;C</div>
                        <div className='weatherInfo'>Humidity = {info.humidity}</div>
                        <div className='weatherInfo'>Minimum Temperature = {info.tempMin} &deg;C</div>
                        <div className='weatherInfo'>Maximum Temperature = {info.tempMax} &deg;C</div>
                        <div className='weatherInfo'>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike} &deg;C</div>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}