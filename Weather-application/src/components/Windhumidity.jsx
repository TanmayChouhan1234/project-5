import React from "react";
import { FaDropbox, FaSun, FaWind } from "react-icons/fa";
import { Droplet, Sunrise, Sunset } from "lucide-react";

const Windhumidity = (data) => {
  const Formate = (dt) => {
    const date = new Date(dt * 1000);
    const dates = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return dates;
  };
  return (
    <div>
      <div className=" w-180 h-auto text-center   p-10 flex flex-3 m-auto gap-5 mt-10">
        <div className="h-50 w-50 rounded-[50%] relative m-auto  text-center bg-[#FFF8F5]">
          <img
            src="https://task-m03-02.vercel.app/compass_wind.svg"
            className="w-full h-full relative"
            alt=""
          />
          <div
            className="absolute  m-auto flex gap-2"
            style={{ bottom: "120px", margin: "auto", left: "60px" }}
          >
            <FaWind className="mt-2 text-xl m-auto" />
            <h1 className="font-bold text-xl">Wind</h1>
          </div>
          <span
            className="absolute m-auto text-3xl text-amber-900"
            style={{ bottom: "50px", left: "60px" }}
          >
            {data?.data?.wind?.speed}m/s
          </span>
        </div>
        <div className="w-50  h-50 relative bg-[#FFF8F5] rounded-4xl">
          <div className="absolute flex gap-2 mt-10 ml-10">
            <Droplet />
            <h1 className="font-bold text-xl">Humidity</h1>
          </div>

          <div
            className={` absolute w-50 bottom-0  bg-[#E2E7B0] h-${data?.data?.main?.humidity}`}
            style={{
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <p className="text-3xl mr-23 mt-2">{data?.data?.main?.humidity}%</p>
          </div>
        </div>
        <div className="w-50 h-50  bg-[#FFF8F5] rounded-4xl">
          <div className="flex gap-2  mt-10 ml-4">
            <Sunset className="mt-1" />
            <h1 className="mt-1 font-bold">Sunrise and sunset</h1>
          </div>
          <div className=" flex flex-col mt-12 gap-2">
            <div className="flex m-auto gap-4">
              <Sunrise />
              <span>{Formate(data?.data?.sys?.sunrise)} </span>
            </div>
            <div className="flex m-auto gap-4">
              <Sunset className="mt-1" />
              <span className="mt-2">{Formate(data?.data?.sys?.sunset)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Windhumidity;
