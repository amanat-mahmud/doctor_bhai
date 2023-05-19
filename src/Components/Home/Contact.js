import React from "react";
import Bg from "../../assets/images/bg.png";

const Contact = () => {
  return (
    <div className="hero py-36 h-32" style={{ backgroundImage: `url(${Bg})` }}>
      <form>
        <div className="form-control w-1/2">
          <div className="">
            <p className="primary text-center">Contact Us</p>
            <h1 className=" my-6 text-4xl text-center">
              Stay Conneted With Us
            </h1>
            <label className="input-group">
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered "
              />
            </label>
          </div>
          <label className="input-group my-7">
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
            />
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder=""
              className="input input-bordered h-28"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Contact;
