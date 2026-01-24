import React, { useEffect } from "react";
import { navigations } from "../../data/navigation";
import { NavLink } from "react-router";
import { socialHandles } from "../../data/socialsHandles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNav = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <section
        className={`lg:hidden bg-black text-white fixed top-0 bottom-0 left-0 right-0 transition-transform duration-500 ease-in-out z-40 overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <section className="w-[90%] sm:w-[85%] mx-auto">
          <div className="py-8.5 w-fit ">
            <img
              src="/images/tggc_logo.webp"
              alt="the gathering global church logo"
            />
          </div>
          {/* mobile navigation */}
          <nav className="mt-">
            <ul className="text-3xl flex flex-col gap-6">
              {navigations.map((navigation) => {
                const { anchorName, anchorLink } = navigation;
                return (
                  <li
                    key={anchorName}
                    className="hover:text-purple-800 font-medium"
                  >
                    <NavLink
                      to={anchorLink}
                      className={({ isActive }) =>
                        isActive
                          ? "text-purple-800 underline underline-offset-4"
                          : ""
                      }
                    >
                      {}
                      {anchorName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* join us */}
          <section className="mt-10 pb-8 bg-linear-to-br from-purple-900 via-purple-950 to-black rounded-2xl py-8 px-4 shadow-2xl border border-purple-800/30">
            <h1
              className="text-6xl font-bold text-center px-3 mb-2"
              style={{
                WebkitTextStroke: "2px white",
                WebkitTextFillColor: "transparent",
                paintOrder: "stroke fill",
              }}
            >
              Join Us Every
            </h1>

            <div className="flex mt-10 justify-around px-4">
              <p className="text-2xl font-bold">
                Sunday: <span className="text-purple-300">9AM</span>
              </p>
              <p className="text-2xl font-bold">
                Thursday: <span className="text-purple-300">6PM</span>
              </p>
            </div>
          </section>

          {/* socials */}
          <section className="mt-10 pb-8">
            <h2 className="text-xl font-semibold mb-4 text-purple-300">
              Connect With Us
            </h2>
            <div className="flex gap-2 justify-center">
              {socialHandles.map((socialHandle) => {
                return (
                  <a
                    key={socialHandle.name}
                    href={socialHandle.href}
                    target={socialHandle.target}
                    rel={socialHandle.rel}
                    className="bg-purple-900/50 hover:bg-purple-800 rounded-full transition-colors p-3"
                    aria-label={socialHandle.ariaLabel}
                  >
                    <FontAwesomeIcon icon={socialHandle.icon} size="lg" />
                  </a>
                );
              })}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default MobileNav;
