import React from 'react'
import '../Components/Weather.css';
import myImg from '../assets/img.png'


let Weather = (props) => {

    let Dispalayimage = (icon) => {
        if (icon) {
            return <img src={iconUrl} className="weather-icon" alt='weather' />
        }
    }
    const icon = props.icon;
    const iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";

    return <div className='info-weather'>
        <div className='Header_Weather'></div>
        <div className='icon-weather'>
            <h1>{CityCountry(props.city, props.country)}</h1>
            {Dispalayimage(icon)}
        </div>
        <h1>{Tempcelsius(props.celsius)}</h1>
        <h4> {Temp(props.temp_min, props.temp_max)}</h4>
        <div>{props.error ? error() : null}</div>
        <h4 className='description'>{props.description}</h4>
    </div>
}
let Temp = (min, max) => {
    if (min && max) {
        return <div>
            <h3>
                <span className='temp'>{min}&deg;/</span>
                <span className='temp'>{max}&deg;</span>
            </h3>
        </div>
    }
}
let CityCountry = (city, country) => {
    if (city && country) {
        return <div>
            <h3>
                <span className='City-country'>{city}, {country}</span>
            </h3>
        </div>
    }
}
let Tempcelsius = (celsius) => {
    if (celsius) {
        return <div>
            <h1>
                <span>{celsius}&deg;</span>
            </h1>
        </div>
    }
}
let error = () => {
    return <div className='error'>
        PLEASE ENTER CITY
        <div><img className='img-error' src={myImg} alt='error' /></div>
    </div>
}

export default Weather