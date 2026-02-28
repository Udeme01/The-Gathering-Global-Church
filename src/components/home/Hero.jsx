import React from "react";
import heroVid from "/videos/Vid5.mp4";

const Hero = () => {
  return (
    <section className="">
      
      <video autoPlay loop muted className="h-full w-full">
        <source src={heroVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
