import { useState, createContext, useContext } from "react";

//const WeatherContext = createContext(null);
export const WeatherContext = createContext(null);

export function useWeather() {
  return useContext(WeatherContext);
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
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
