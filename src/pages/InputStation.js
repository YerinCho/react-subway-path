import React from "react";

const InputStation =({station, type, handleChange}) => {
  return (
    <div className="w-5/12 h-12 text-center text-gray-800">
    <input
      className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      id="departure-station-name"
      type="text"
      value={station}
      placeholder={type}
      onChange={handleChange}
    />
    </div>
  );
}
export default InputStation