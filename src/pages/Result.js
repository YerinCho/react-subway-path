import React, {useEffect, useState} from "react";
import ResultPath from "./ResultPath";
import Favorite from "./Favorite";

const Result = ({distancePath, durationPath}) => {
  const [path, setPath] = useState(distancePath);
  const [type, setType] = useState("DISTANCE");

  useEffect(() => {
    setPath(distancePath);
    setType("DISTANCE");
  }, [distancePath]);

  const changePath= () => {
    setPath(type === "DISTANCE" ? durationPath : distancePath);
    setType(type === "DISTANCE" ? "DURATION" : "DISTANCE");
  }

  return (
    <div id="search-result-container"
         className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top">
      <Favorite/>
      <ul className="flex border-b w-full">
        <li id="shortest-distance-tab" className={`-mb-px w-2/4 ${type === "DISTANCE" ? "active-tab" : ""} tab-menu`}
            onClick={changePath}>
          <a className="w-full text-center inline-block py-2 px-4 font-semibold" href="#">최단거리</a>
        </li>
        <li id="minimum-time-tab" className={`-mb-px w-2/4 ${type === "DURATION" ? "active-tab" : ""} tab-menu`}
            onClick={changePath}>
          <a className="w-full text-center bg-white inline-block py-2 px-4 font-semibold" href="#">최소시간</a>
        </li>
      </ul>
      <ResultPath path={path}/>
    </div>
  );
}
export default Result