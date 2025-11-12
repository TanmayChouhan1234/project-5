import React from "react";
import { FaCalendar } from "react-icons/fa";

const Forecasting = ({ forecast }) => {
  console.log("Forecasting", forecast);

  return (
    <div className="w-165 h-auto p-10 rounded-2xl bg-[#fff8f5] m-auto">
      <div className="font-bold text-2xl flex gap-4">
        <FaCalendar className="mt-1" />
        7-day Forecast
      </div>

      <div className="flex flex-row justify-between gap-4 overflow-x-auto mt-5">
        {forecast?.list?.map((item, index) => {
          const date = new Date(item.dt * 1000);
          const day = date.toLocaleDateString("en-US", { weekday: "short" });
          const dates = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          });

          return (
            <div
              key={index}
              className=" w-30 p-4 rounded-4xl h-50 bg-[#FBEBE1] text-center flex flex-col items-center"
            >
              <h1 className="text-lg font-semibold">
                {(item?.main?.temp - 273.15).toFixed(0)}°C
              </h1>
              <h2 className="text-[14px] text-gray-400">
                {(item?.main?.temp_min - 273.15).toFixed(0)}°C
              </h2>
              <img
                src={`https://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}@2x.png`}
                alt={item?.weather?.[0]?.main}
                className="w-12 h-12 mt-8 "
              />
              <p className="text-[16px]  font-medium">{day}</p>
              <p className="text-[12px]">{dates}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecasting;
