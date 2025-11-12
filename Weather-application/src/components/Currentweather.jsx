import React from "react";

const Currentweather = (data, forecast) => {
  return (
    <div className=" text-center p-5  w-100 h-auto mt-10 m-auto">
      <div className="flex justify-center">
        <h1 className="text-2xl">Good visibility</h1>
      </div>
      <h2 style={{ fontSize: "70px" }} className="font-bold">
        {(data?.data?.main?.temp - 273.15).toFixed(0)}°C
      </h2>
      <div className="font-bold">
        Feels like {(data?.data?.main?.feels_like - 273.15).toFixed(0)}°
      </div>
      <div className="flex font-bold justify-center">
        <div> Low {(data?.data?.main?.temp_min - 273.15).toFixed(0)}° . </div>
        <div> High {(data?.data?.main?.temp_max - 273.15).toFixed(0)}°</div>
      </div>
    </div>
  );
};

export default Currentweather;
