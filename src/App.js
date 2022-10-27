import "./App.css";
import List from "./components/List";
import Edit from "./components/Edit";
import CurrentSearch from "./components/CurrentSearch";
import { useWeather } from "./helpers/WeatherContext";

function App() {
  const { data } = useWeather();

  function getbkgd(data) {
    if (data.weather) {
      if (
        data.weather[0].description === "clear sky" ||
        data.weather[0].description === "few clouds"
      ) {
        return "app2";
      } else if (
        data.weather[0].description === "scattered clouds" ||
        data.weather[0].description === "broken clouds"
      ) {
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
      <Edit />
      <CurrentSearch />
      <List />
    </div>
  );
}

export default App;
