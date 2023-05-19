import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import Background from "../../assets/images/bg.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")",
  };
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" rounded-lg shadow-2xl lg:w-1/2 sm:w-full"
          />
          <div className="w-full text-center ">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
