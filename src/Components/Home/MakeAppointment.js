import React from "react";
import Doctor from "../../assets/images/doctor.png";
import Bg from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div className=" my-40">
      <div
        className="grid lg:grid-cols-2 gap-5 shadow-xl"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <figure>
          <img src={Doctor} alt="Album" className=" -mt-44 hidden lg:block" />
        </figure>
        <div className="my-auto p-5">
          <p className="text-primary">Appointment</p>
          <h2 className="text-white text-4xl my-3">
            Make an appointment Today
          </h2>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
