import React, {useState} from "react";

import "../assets/service/css/search.css";
import Input from "./Input";
import Result from "./Result";
import axios from 'axios';
import {ERROR_MESSAGE} from "../utils/constants";

const Search = props => {
  const [path, setPath] = useState(null);
  const search = async (departure, arrival) => {
    try {
      const response = await axios.get(`/paths?source=${departure}&target=${arrival}&type=DISTANCE`);
      setPath(response.data);
    } catch (e) {
      window.alert(`출발역: ${departure}, 도착역: ${arrival}\n${ERROR_MESSAGE.COMMON}`);
    }
  }
  return (
    <div>
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
        <Input
          search={search}/>
      </div>
      {path == null
        ? <></> : <Result path={path}/>}
    </div>
  );
}

export default Search;
