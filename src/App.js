import "./App.css";
import List from "./List";
import Edit from "./Edit";
import CurrentSearch from "./CurrentSearch";
import { v4 as uuidv4 } from "uuid";
import { useWeather } from "./helpers/WeatherContext";

function App() {
  const { setHistory } = useWeather();
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
  return (
    <div className="app">
      <Edit addHistory={addHistory} />
      <CurrentSearch getTime={getTime} />
      <List addHistory={addHistory} />
    </div>
  );
}

export default App;
