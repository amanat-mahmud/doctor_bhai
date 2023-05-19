import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faLocationDot,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:flex gap-5 justify-center items-center bg-gradient-to-r from-primary to-secondary text-white lg:h-48 rounded-lg p-10 mx-3">
          <div className=" text-8xl text-center mb-5">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          </div>
          <div className="">
            <h2 className="text-xl text-center lg:text-left mb-3 lg:mb-09">
              Opening hours
            </h2>
            <p className="text-center lg:text-left mb-3 lg:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              corrupti. Maxime
            </p>
          </div>
        </div>

        <div className=" lg:flex gap-5 justify-center items-center bg-slate-800 text-white lg:h-48 rounded-lg p-10 mx-3">
          <div className=" text-8xl text-center mb-5">
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          </div>
          <div className="">
            <h2 className=" text-xl text-center lg:text-left mb-3 lg:mb-0">
              Opening hours
            </h2>
            <p className="text-center lg:text-left mb-3 lg:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              corrupti. Maxime
            </p>
          </div>
        </div>
        <div className="lg:flex gap-5 justify-center items-center bg-gradient-to-r from-primary to-secondary text-white lg:h-48 rounded-lg p-10 mx-3">
          <div className=" text-8xl text-center mb-5">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          </div>
          <div className="">
            <h2 className=" text-xl text-center lg:text-left mb-3 lg:mb-0">
              Opening hours
            </h2>
            <p className="text-center lg:text-left mb-3 lg:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              corrupti. Maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
