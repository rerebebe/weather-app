import SearchItem from "./SearchItem.js";

import { useWeather } from "./helpers/WeatherContext";

const List = ({ addHistory }) => {
  const { history } = useWeather();

  return (
    <div className="history">
      <p>Search History</p>
      <div className="historyContent">
        {history.map((item, index) => {
          const { id, city, country, time } = item;
          return (
            <SearchItem
              addHistory={addHistory}
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
  );
};

export default List;
