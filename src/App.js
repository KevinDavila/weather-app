//import logo from "./logo.svg";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { API_key, Weather_API_URL } from "./api";
import "./App.css";
import { useState } from "react";
import Card from "./components/card/card";

function App() {
  //se crean hooks para imprimir los datos de repsuesta del api
  const [getWeather, setWeather] = useState(null);
  const [getForecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    //console.log(searchData);
    const [lan, lon] = searchData.value.split(" ");
    console.table({ lan, lon });
    const getWeather = fetch(
      `${Weather_API_URL}/weather?lat=${lan}&lon=${lon}&appid=${API_key}&units=metric`
    );
    const getForecast = fetch(
      `${Weather_API_URL}/forecast?lat=${lan}&lon=${lon}&appid=${API_key}&units=metric`
    );

    Promise.all([getWeather, getForecast])
      .then(async (response) => {
        //se guardan las respuestas en json en variables
        const weatherresponse = await response[0].json();
        const forecastresponse = await response[1].json();
        //setear las respuestas a los hooks setWeather y setForecast
        //se extiende(hace como un push al array desde el otro component) con el dato label de la funcion seachData setWeather({city: searchData.city.label, ...weatherresponse})
        setWeather({ city: searchData.label, ...weatherresponse });
        setForecast({ city: searchData.label, ...forecastresponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(getWeather);
  console.log(getForecast);
  return (
    <div className="container">
        <h1 className="title">Weather App</h1>        
        <Search onSearchChange={handleOnSearchChange} />
        {/* pasar props al componente para imprimier los datos con data= */}
        {/* se valida si existe algo para mostrar */}
        {getWeather && <CurrentWeather data={getWeather} />}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Card />
    </div>
  );
}

export default App;
