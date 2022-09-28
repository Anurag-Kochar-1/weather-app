import React from 'react'
import "../App.css"

function CityWeatherCard(props) {
  return (
    <div className='weather-card'>
        
        <h2> {props.weather[0]?.data?.name} </h2>
        <h1> {props.weather[0]?.data?.main?.temp} ℃ </h1> 
        <img src={`https://openweathermap.org/img/wn/${props.weather[0]?.data?.weather[0]?.icon}@2x.png`} className='icon' />
        <h3> {props.weather[0]?.data?.weather[0]?.main} </h3>

         
            
        

           
            

    </div>

    
  )
}

export default CityWeatherCard


{/* <button onClick={() => console.log(props.weather[0]?.data?.name)} > Check  </button>
    <button onClick={() => console.log(props.weather[0]?.data?.weather[0]?.icon) } > WHOLE STATE  </button>         */}