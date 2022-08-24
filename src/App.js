import logo from './logo.svg';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { API_key, Weather_API_URL } from "./api";
import './App.css';

function App() {
  //se crean hooks para imprimir los datos de repsuesta del api
  

  const handleOnSearchChange = (searchData) =>{
    //console.log(searchData);
    const [lan, lon] = searchData.value.split(" ");
    console.table({lan, lon});
    const getWeather = fetch(`${Weather_API_URL}/weather?lat=${lan}&lon=${lon}&appid=${API_key}`)
    const getForecast = fetch(`${Weather_API_URL}/forecast?lat=${lan}&lon=${lon}&appid=${API_key}`)
    
    Promise.all([getWeather, getForecast])
    .then(async (response) => { 
      //se guardan las respuestas en json en variables
      const weatherresponse = await response[0].json();
      const forecastresponse = await response[1].json();
    });
  }
  return (
    <div className="App">
      <header className="App-header">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
      <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
