import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen xl:min-h-0 xl:h-screen relative font-anton">
      <div className="w-full h-screen xl:h-screen">
        <img
          src="/images/image4.JPG"
          alt=""
          className="w-full h-full object-cover xl:object-top-left"
        />
        {/* overlay */}
        <div className="bg-black/60 absolute top-0 right-0 bottom-0 left-0" />
      </div>

      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl w-full grid place-items-center">
        <div className="my-3 text-white uppercase font-medium flex flex-col gap-6">
          <h1 className="stretched-text tracking-wide md:text-4xl lg:text-6xl w-fit">
            The Gathering Global Church
          </h1>

          <p className="grid gap-3 text-2xl leading-6 left-0 w-full">
            <span className="block text-purple-200">
              in faith, by faith . . .
            </span>
            <span>. . . in the spirit, by the spirit</span>
          </p>
        </div>
      </section>
      <a
        href="#"
        target="_blank"
        className="absolute bottom-72 left-1/2 -translate-x-1/2 border-none outline-none rounded-full text-center tracking-[0.1rem] text-sm hover:bg-purple-700 hover:text-white bg-white text-black px-6 py-3 uppercase"
      >
        watch live
      </a>
    </section>
  );
};

export default Hero;
