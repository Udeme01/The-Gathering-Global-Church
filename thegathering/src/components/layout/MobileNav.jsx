import React, { useEffect } from "react";
import { navigations } from "../../data/navigation";
import { NavLink } from "react-router";

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
      {/* Backdrop with blur */}
      {/* <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 39 }}
      /> */}
      <section
        className={`md:hidden bg-black text-white fixed top-0 bottom-0 left-0 right-0 transition-transform duration-500 ease-in-out z-40 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
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
                    {anchorName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default MobileNav;
