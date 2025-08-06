import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({info}){
    const INIT_URL = "data:image/jpeg;base64,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"
   
    const HOT_URL = "https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
    const COLD_URL = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=612x612&w=0&k=20&c=HBpXbY4mvVDxUowmAibqHYvNqi-wIEU9DmXFxW4Cj98=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="; 

    return (
        <div className="InfoBox">
         <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 140}}
        image={
          info.humidity > 80
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
          info.humidity > 80
          ? <ThunderstormIcon/>
          : info.temp > 15
          ? < SunnyIcon />
          : < AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}&deg;C</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    );
}