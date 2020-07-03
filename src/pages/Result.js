import React, {useEffect, useState} from "react";
import ResultPath from "./ResultPath";
import Favorite from "./Favorite";
import {PATH_TYPE} from "../utils/constants";

const Result = ({distancePath, durationPath}) => {
  const [path, setPath] = useState(distancePath);
  const [type, setType] = useState(PATH_TYPE.DISTANCE);

  useEffect(() => {
    setPath(distancePath);
    setType(PATH_TYPE.DISTANCE);
  }, [distancePath]);

  const changePath= () => {
    setPath(type === PATH_TYPE.DISTANCE ? durationPath : distancePath);
    setType(type === PATH_TYPE.DISTANCE ? PATH_TYPE.DURATION : PATH_TYPE.DISTANCE);
  }

  return (
    <div id="search-result-container"
         className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top">
      <Favorite/>
      <ul className="flex border-b w-full">
        <li id="shortest-distance-tab" className={`-mb-px w-2/4 ${type === PATH_TYPE.DISTANCE ? "active-tab" : ""} tab-menu`}
            onClick={changePath}>
          <a className="w-full text-center inline-block py-2 px-4 font-semibold" href="#">최단거리</a>
        </li>
        <li id="minimum-time-tab" className={`-mb-px w-2/4 ${type === PATH_TYPE.DURATION ? "active-tab" : ""} tab-menu`}
            onClick={changePath}>
          <a className="w-full text-center bg-white inline-block py-2 px-4 font-semibold" href="#">최소시간</a>
        </li>
      </ul>
      <ResultPath path={path}/>
    </div>
  );
}
export default Result