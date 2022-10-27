import { useWeather } from "./helpers/WeatherContext";
import { BiSearchAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const SearchItem = ({ index, id, city, country, time }) => {
  const {
    data,
    setData,
    setCity,
    setCountry,
    warnMessage,
    setWarnMessage,
    history,
    setHistory,
  } = useWeather();

  const deleteItem = (id) => {
    setHistory(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=55141f435bde34cfbbe5b1de710e39e0`;

  const setAPI = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setCity("");
      setCountry("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlehistory">
      <div className="numnlocation">
        <p>
          {index + 1}. {`${city}, ${country}`}
        </p>
      </div>

      <div className="timenbtn">
        <p>{time}</p>
        <button type="button" onClick={setAPI}>
          <BiSearchAlt size="1.3rem" margin="auto" />
        </button>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          <RiDeleteBin6Line size="1.3rem" margin="auto" />
        </button>
      </div>
    </div>
  );
};

export default SearchItem;
