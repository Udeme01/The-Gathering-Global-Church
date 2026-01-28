import React, { Fragment, useState } from "react";
import { navigations } from "../../data/navigation";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { socialHandles } from "../../data/socialsHandles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white font-montserrat relative">
      <section className="w-full h-[350px] max-w-6xl bg-white rounded-2xl px-8 md:px-16 py-8 pb-32 relative bottom-10 left-0 right-0 mx-auto border-t border-black/10">
        <section className="mb-8 text-black">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter pt-6 md:pt-12">
            Give to <span>The Gathering Global Church</span>
          </h1>
          <p className="text-base mt-2 md:text-lg lg:text-xl">
            Your generosity keeps blessing lives, thanks for giving.
          </p>
        </section>
        <section className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full h-10 sm:h-12 px-4 sm:px-5 font-medium uppercase tracking-widest text-sm sm:text-md flex items-center justify-center"
          >
            Give Now
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-md font-medium uppercase tracking-widest flex items-center justify-center"
          >
            Partner With Us
          </a>
        </section>
      </section>
      <section className="w-[90%] sm:w-[85%] mx-auto pb-8">
        {/* footer head */}
        <section>
          <div>
            <img
              src="/images/tggc_logo.webp"
              alt="logo"
              className="w-36 h-auto"
            />
          </div>
          <h1 className="capitalize text-xl">
            in faith, by faith. <span>in the spirit, by the spirit.</span>
          </h1>
        </section>
        {/* footer links */}

        <nav>
          <ul className="my-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {navigations.map((navigation) => {
              const { anchorName, anchorLink, nested } = navigation;
              const hasNested = nested && nested.length > 0;
              return (
                <li key={anchorName} className="leading-12">
                  {hasNested && (
                    <>
                      <button className="text-xl text-white/60 mb-2">
                        {anchorName}
                      </button>
                      <ul className="space-y-3">
                        {nested.map((nest) => {
                          const { nestedLink, nestedName } = nest;
                          return (
                            <li key={nestedLink}>
                              <NavLink
                                to={nestedLink}
                                className="text-sm ml-4 hover:text-purple-300 block"
                              >
                                {nestedName}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Bar */}
        <section className="w-full mt-6 pt-4 border-t border-neutral-white/5 flex flex-col items-center justify-center md:mt-12">
          {/* social handles */}
          <section className="flex justify-between gap-4 py-3">
            {socialHandles.map((socialHandle) => {
              return (
                <a
                  key={socialHandle.name}
                  href={socialHandle.href}
                  target={socialHandle.target}
                  rel={socialHandle.rel}
                  className="bg-purple-500 hover:bg-purple-700 rounded-full transition-all duration-500 ease-in-out hover:scale-110 p-3"
                  aria-label={socialHandle.ariaLabel}
                >
                  <FontAwesomeIcon icon={socialHandle.icon} size="lg" />
                </a>
              );
            })}
          </section>
          <p className="text-xs text-neutral-white/60 mt-4 md:mt-">
            &copy; {currentYear} The Gathering Global Church. All rights
            reserved.
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

// : (
//                     <NavLink
//                       to={anchorLink}
//                       className="hover:text-purple-300 text-xl"
//                     >
//                       {anchorName}
//                     </NavLink>
//                   )
