import React, { Fragment, useEffect, useState } from "react";
import { navigations } from "../../data/navigation";
import { NavLink } from "react-router";
import { socialHandles } from "../../data/socialsHandles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MobileNav = ({ isOpen, isClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOpenDropdown(null);
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleDropdown = (anchorName) => {
    setOpenDropdown(openDropdown === anchorName ? null : anchorName);
  };

  const handleOnClose = () => {
    if (isClose) {
      isClose();
    }
  };

  return (
    <>
      <section
        className={`lg:hidden bg-black text-white fixed top-0 bottom-0 left-0 right-0 transition-transform duration-500 ease-in-out z-40 overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <section className="w-[90%] sm:w-[85%] mx-auto">
          <NavLink
            to={`/`}
            onClick={handleOnClose}
            className="inline-block py-8.5 w-fit"
          >
            <img
              src="/images/tggc_logo.webp"
              alt="the gathering global church logo"
            />
          </NavLink>
          {/* mobile navigation */}
          <nav className="mt-">
            <ul className="text-3xl flex flex-col">
              {navigations.map((navigation) => {
                const { anchorName, anchorLink, nested } = navigation;
                const hasNested = nested && nested.length > 0;
                const isDropdownOpen = openDropdown === anchorName;
                return (
                  <Fragment key={anchorName}>
                    <li className="hover:text-white/60 font-medium flex items-center gap-2 mb-6 mt-2 first:mt-0 w-fit">
                      {hasNested ? (
                        <button
                          onClick={() => toggleDropdown(anchorName)}
                          className={`flex w-60 items-center justify-between text-[20px]`}
                        >
                          <span className="cursor-text">{anchorName}</span>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            size="xs"
                            className={`transition-transform duration-500 ease-in-out ${isDropdownOpen ? "rotate-90" : "rotate-0"}`}
                          />
                        </button>
                      ) : (
                        <NavLink
                          to={anchorLink}
                          onClick={handleOnClose}
                          className={({ isActive }) =>
                            `flex w-fit items-center gap-2 text-[20px] ${
                              isActive ? "text-white" : ""
                            }`
                          }
                        >
                          {anchorName}
                        </NavLink>
                      )}
                    </li>

                    {hasNested && (
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out mb-1 ${isDropdownOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
                      >
                        {nested.map((item) => (
                          <li
                            key={item.nestedName}
                            className={`pl-6 text-2xl hover:text-purple-300 mb-5 w-fit`}
                          >
                            <NavLink
                              to={item.nestedLink}
                              onClick={handleOnClose}
                              className={({ isActive }) =>
                                `text-[18px] ${isActive ? "text-white" : ""}`
                              }
                            >
                              {item.nestedName}
                            </NavLink>
                          </li>
                        ))}
                      </div>
                    )}
                  </Fragment>
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
            <h2 className="text-lg font-semibold mb-4 text-purple-300">
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
                    className="bg-purple-900/50 hover:bg-purple-800 rounded-full transition-all duration-500 ease-in-out hover:scale-110 p-3"
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
