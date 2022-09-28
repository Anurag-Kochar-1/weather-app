import { useEffect , useState , useRef } from 'react';
import './App.css';
import CityWeatherCard from './components/CityWeatherCard';
import Axios from "axios"



function App() {
  const [ city, setCity ] = useState('')
  const [weather, setWeather] = useState([{}])
  

  const inputRef = useRef(null)

  // let API_KEY = `e`
  // let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

  // const callingAPI = () => {
  //   Axios.get(API_URL)
  //   .then(response => {
  //     console.log(response.data);
  //     setWeather(response)
  //   })
  //   .catch(error => {
  //     console.log(error.message);
  //   })
  //   inputRef.current.value = ""
  //   setCity("")
  // }

  const fetchingAPI = async (cityName) => {
    const key = `225298f77dee4c33f452dc59832e1b66`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    setWeather([ {data} ])

    inputRef.current.value = ""
    setCity("")
  }



  useEffect(() => {
    if(city){
        fetchingAPI(city)
      } 
  },[city])


  return (
    <div className="app-container">

      <div className='input-container'>

          <input 
            type="search"
            ref={inputRef}
            className='input'
            placeholder = "Search city...."
            onKeyUp={(e) => {
              if(e.key === "Enter" && e.target.value.length != 0 ) {
                setCity(e.target.value)
              }
             }}
          />
      </div>


      <div className="result-container">

         {weather[0]?.data?.name && <CityWeatherCard 
          weather = {weather}
          />}

          {/* <button onClick={() => console.log(weather[0].value) }> Weather State </button> */}

          
      </div>


      
    </div>
  );
}

export default App;
