import "./App.css";
import List from "./List";
import Edit from "./Edit";
import CurrentSearch from "./CurrentSearch";
import { v4 as uuidv4 } from "uuid";
import { useWeather } from "./helpers/WeatherContext";

function App() {
  const { setHistory, data } = useWeather();
  function addHistory(data) {
    setHistory(function (prevData) {
      if (data) {
        return [
          ...prevData,
          {
            id: uuidv4(),
            city: data.name,
            country: data.sys.country,
            time: getTime(),
          },
        ];
      }
    });
  }

  function getTime() {
    const d = new Date();
    const time = d.toLocaleTimeString();
    return time;
  }

  function getbkgd(data) {
    if (data.weather) {
      if (data.weather[0].description === "clear sky") {
        return "app2";
      } else if (data.weather[0].description === "scattered clouds") {
        return "app3";
      } else {
        return "app";
      }
    } else {
      return "app4";
    }
  }

  return (
    <div className={getbkgd(data)}>
      <Edit addHistory={addHistory} />
      <CurrentSearch getTime={getTime} />
      <List addHistory={addHistory} />
    </div>
  );
}

export default App;
