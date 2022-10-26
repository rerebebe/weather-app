import { useWeather } from "./helpers/WeatherContext";

function CurrentSearch({ getTime }) {
  const { data } = useWeather();
  return (
    <div className="weatherlocation">
      <div className="location">
        {data.sys ? (
          <h4>
            {data.name}, {data.sys.country}
          </h4>
        ) : null}
      </div>
      <div className="temprange">
        {data.main ? (
          <p>
            {data.main.temp_min}°F ~ {data.main.temp_max}°F
          </p>
        ) : null}
      </div>

      <div className="temp">
        {data.main ? <h1>{data.main.temp}°F</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].description}</p> : null}
      </div>

      <div className="bottom">
        <div className="humidity">
          {data.main ? (
            <p>
              <span>Humidity</span> {data.main.humidity}%
            </p>
          ) : null}
        </div>

        <div className="time">
          {data.dt ? (
            <p>
              <span>Time</span> {getTime()}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CurrentSearch;
