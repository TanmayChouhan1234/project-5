import React, { useState, useEffect } from "react";
import "../App.css";

import Currentweather from "./Currentweather";
import Forecasting from "./Forecasting";
import Windhumidity from "./Windhumidity";
const Weather = () => {
  const [data, setdata] = useState();
  const [city, setcity] = useState("Jodhpur");
  const [forecast, setForecast] = useState();
  // console.log("city", city);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=86e87d4a4c91c5b27586529395a847a7`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => setdata(data))
      .catch((Error) => console.error("Error fetching data:", Error));
  }, [city]);

  useEffect(() => {
    fetch(
      `https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=86e87d4a4c91c5b27586529395a847a7`
    )
      .then((Response) => Response.json())
      .then((forecast) => setForecast(forecast))
      .catch((Error) => console.error("Error fetching data :", Error));
  }, [city]);
  return (
    <div className=" w-250 p-10 m-auto ">
      <div className="justify-center    flex gap-3">
        <input
          onChange={(e) => setcity(e.target.value)}
          value={city}
          type="text"
          style={{ backgroundColor: "#FFF8F5" }}
          className="border border-black w-150 h-13 rounded-4xl text-2xl text-center"
        />

        <div className=" rounded-4xl w-13 h-13 bg-black text-white text-2xl flex justify-center items-center ">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <Currentweather data={data} />
      <Forecasting forecast={forecast} />
      <Windhumidity data={data} />
    </div>
  );
};

export default Weather;
