import React from "react";
import baby from "../../assets/images/treatment.png";

const AnotherFeature = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-base-100 shadow-xl">
      <figure>
        <img src={baby} alt="Movie" className="w-full" />
      </figure>
      <div className=" my-auto p-5">
        <h2 className="card-title text-5xl font-bold">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
      </div>
    </div>
  );
};

export default AnotherFeature;
