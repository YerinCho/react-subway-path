import React, {useEffect, useState} from "react";

import "../assets/service/css/search.css";
import Input from "./Input";
import Result from "./Result";
import axios from 'axios';
import {ERROR_MESSAGE, PATH_TYPE} from "../utils/constants";

const Search = props => {
  const [distancePath, setDistancePath] = useState(null);
  const [durationPath, setDurationPath] = useState(null);

  const search = (departure, arrival) => {
    if (departure.length === 0 || arrival.length === 0) {
      window.alert(ERROR_MESSAGE.NOT_EMPTY);
    } else {
      searchPath(departure, arrival, PATH_TYPE.DISTANCE);
      searchPath(departure, arrival, PATH_TYPE.DURATION);
    }
  }

  const searchPath = (departure, arrival, type) => {
    axios.get(`/paths?source=${departure}&target=${arrival}&type=${type}`)
      .then(response =>
        type === PATH_TYPE.DISTANCE ? setDistancePath(response.data) : setDurationPath(response.data))
      .catch(() => window.alert(`출발역: ${departure}, 도착역: ${arrival}\n${ERROR_MESSAGE.COMMON}`));
  }

  return (
    <div>
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
        <Input
          search={search}/>
      </div>
      {(distancePath == null || durationPath == null) ? <></> :
        <Result distancePath={distancePath}
                durationPath={durationPath}
        />}
    </div>
  );
}

export default Search;
