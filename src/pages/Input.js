import React, {useState} from "react";
import InputStation from "./InputStation";

const Input = ({search}) => {
  const [departureStation, setDepartureStation] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");

  const handleChangeDeparture = e => {
    setDepartureStation(e.target.value);
  }

  const handleChangeArrival = e => {
    setArrivalStation(e.target.value);
  }

  return (
    <form className="bg-white mb-4">
      <div className="flex flex-wrap mb-3">
        <div className="w-5/12 h-12 text-center text-gray-800">
          <InputStation
            station={departureStation}
            type={"출발역"}
            handleChange={handleChangeDeparture}
          />
        </div>
        <div className="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center">
          <span className="mdi mdi-arrow-right-thick relative bottom-6px text-lg"/>
        </div>
        <div className="w-5/12 h-12 text-center text-gray-800">
          <InputStation
            station={arrivalStation}
            type={"도착역"}
            handleChange={handleChangeArrival}
          />
        </div>
      </div>
      <button type="button" id="search-button"
              className="w-full text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded-sm"
              onClick={() => search(departureStation, arrivalStation)}>
        검색
      </button>
    </form>
  );
}
export default Input;