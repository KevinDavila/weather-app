import "./current-weather.css";

//initialized function
const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Example</p>
          <p className="description">example</p>
          <img alt="weather" className="icon" src="sunny" />
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
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
