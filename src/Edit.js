import { useWeather } from "./helpers/WeatherContext";
import { API_GET_DATA, url } from "./helpers/constants";

import { useEffect } from "react";

function Edit({ addHistory }) {
  const {
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
  } = useWeather();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=55141f435bde34cfbbe5b1de710e39e0`;

  const searchLocation = async () => {
    try {
      if (city && country) {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        if (data.message) {
          setWarnMessage(data.message);
          setCity("");
          setCountry("");
        } else {
          addHistory(data);
          setCity("");
          setCountry("");
          setWarnMessage("");
        }
      } else {
        setWarnMessage("Please enter the location!");
      }
    } catch {
      setWarnMessage(data.message);
    }
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    // console.log(data);
  };

  // adding into history state

  const fetchHistory = async () => {
    try {
      const response = await fetch(API_GET_DATA);
      const { history } = await response.json();
      setHistory(history);
    } catch (error) {
      console.log(error);
    }
  };

  const pushHistory = async () => {
    try {
      await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ history }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  console.log(history);

  useEffect(() => {
    pushHistory();
  }, [history]);

  return (
    <div>
      <div className="top">
        {/* {JSON.stringify(history)} */}

        {warnMessage}
        <div className="searchbar">
          <label htmlFor="City">City:</label>
          <input
            className="input"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            name="city"
          />
          <label htmlFor="Country">Country:</label>
          <input
            className="input"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            name="country"
          />
          <button onClick={searchLocation} disabled={!city || !country}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
