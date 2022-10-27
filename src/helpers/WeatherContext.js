import { useState, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

//const WeatherContext = createContext(null);
export const WeatherContext = createContext(null);

export function useWeather() {
  return useContext(WeatherContext);
}
export function getTime() {
  const d = new Date();
  const time = d.toLocaleTimeString();
  return time;
}

export function addHistory(setHistory, data) {
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

export function WeatherProvider({ children }) {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [warnMessage, setWarnMessage] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <WeatherContext.Provider
      value={{
        data,
        setData,
        city,
        setCity,
        country,
        setCountry,
        warnMessage,
        setWarnMessage,
        history,
        setHistory,
        getTime,
        addHistory,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
