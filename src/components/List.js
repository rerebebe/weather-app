import SearchItem from "./SearchItem.js";

import { useWeather } from "../helpers/WeatherContext";

const List = () => {
  const { history, warnMessage } = useWeather();

  return (
    <div>
      {warnMessage ? <div className="warnmsg">{warnMessage}</div> : null}
      <div className="history">
        <p>Search History</p>
        <div className="historyContent">
          {history.map((item, index) => {
            const { id, city, country, time } = item;
            return (
              <SearchItem
                key={index}
                index={index}
                id={id}
                city={city}
                country={country}
                time={time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
