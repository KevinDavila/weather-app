import "./current-weather.css";

//initialized function
const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
          <img alt="weather" className="icon" src="sunny" />
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
            <div className="parameter-row">
                <span className="parameter-label">example</span>
                <span className="parameter-value">18°C</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
