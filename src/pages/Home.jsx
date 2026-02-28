import React from "react";
import Hero from "../components/home/Hero";
import { Link } from "react-router";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="py-4">
        <marquee>
          <p className="font-medium uppercase tracking-wide text-xl">
            This website is currently under development...
          </p>
        </marquee>
      </section>

      <section className="h-screen text-center flex flex-col gap-4 items-center justify-center w-[90%] mx-auto px-20">
        <h1 className="text-xl font-medium uppercase">
          Are you a First Timer, click the button below
        </h1>

        <Link to={`/connect/membership`}>
          <h2 className="bg-purple-800 text-white px-4 py-3 rounded font-semibold tracking-wide hover:scale-[0.95] duration-300 ease-in">
            Membership Form
          </h2>
        </Link>
      </section>
    </main>
  );
};

export default Home;
