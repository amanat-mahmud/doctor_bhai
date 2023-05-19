import React from "react";
import img1 from "../../assets/images/cavity.png";
import img2 from "../../assets/images/fluoride.png";
import img3 from "../../assets/images/whitening.png";

const OurService = () => {
  return (
    <div className=" my-20">
      <p className="text-secondary text-center text-xl mb-3">Our Services</p>
      <h1 className="text-center text-4xl mb-16">Services We Provide</h1>
      <div className="grid lg:grid-cols-3 gap-5 ">
        <div className=" h-[320px] shadow-lg mx-3 p-5">
          <img src={img1} alt="" className="w-28 mx-auto mb-8" />
          <h5 className="text-center text-xl mb-2 ">Fluoride Treatment</h5>
          <p className="text-center text-base">
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
        <div className=" h-[320px] shadow-lg mx-3 p-5">
          <img src={img2} alt="" className="w-28 mx-auto mb-8 " />
          <h5 className="text-center text-xl mb-2 ">Fluoride Treatment</h5>
          <p className="text-center text-base">
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
        <div className=" h-[320px] shadow-lg mx-3 p-5">
          <img src={img3} alt="" className="w-28 mx-auto mb-8" />
          <h5 className="text-center text-xl mb-2 ">Fluoride Treatment</h5>
          <p className="text-center text-base">
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
