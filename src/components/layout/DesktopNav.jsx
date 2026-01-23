import React from "react";
import { navigations } from "../../data/navigation";
import { NavLink } from "react-router";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex md:items-center md:justify-center">
      <ul className="flex items-center justify-between gap-10">
        {navigations.map((navigation) => {
          const { anchorName, anchorLink } = navigation;
          return (
            <li key={anchorName}>
              <NavLink
                to={anchorLink}
                className={({ isActive }) =>
                  isActive ? "text-purple-800 underline underline-offset-4" : ""
                }
              >
                {anchorName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
