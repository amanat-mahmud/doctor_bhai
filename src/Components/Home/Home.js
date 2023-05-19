import React from "react";
import AnotherFeature from "./AnotherFeature";
import Contact from "./Contact";
import Features from "./Features";
import Hero from "./Hero";
import MakeAppointment from "./MakeAppointment";
import OurService from "./OurService";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <OurService></OurService>
      <AnotherFeature></AnotherFeature>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
