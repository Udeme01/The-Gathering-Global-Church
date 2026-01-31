import React, { Fragment, useState } from "react";
import { navigations } from "../../data/navigation";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const DesktopNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (anchorName) => {
    setOpenDropdown(openDropdown === anchorName ? null : anchorName);
  };

  return (
    <nav className="hidden lg:flex md:items-center md:justify-center">
      <ul className="flex items-center justify-between gap-10">
        {navigations.map((navigation) => {
          const { anchorName, anchorLink, nested } = navigation;
          const hasNested = nested && nested.length > 0;
          const isDropdownOpen = openDropdown === anchorName;
          return (
            <Fragment key={anchorName}>
              <li>
                {hasNested ? (
                  <button
                    onClick={() => toggleDropdown(anchorName)}
                    className="cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      {anchorName}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        size="xs"
                        className={`transition-all duration-500 ease-in-out ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                      />
                    </span>
                  </button>
                ) : (
                  <NavLink to={anchorLink}>{anchorName}</NavLink>
                )}
              </li>
              {hasNested && (
                <section
                  className={`absolute top-1/9 text-sm bg-black p-6 mt-1 rounded w-fit h-auto flex items-center justify-center gap-10 transition-all duration-500 ease-in-out ${isDropdownOpen ? "max-h-full opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-full"}`}
                >
                  {nested.map((nestedItem) => {
                    return (
                      <li>
                        <NavLink to={nestedItem.nestedLink}>
                          {nestedItem.nestedName}
                        </NavLink>
                      </li>
                    );
                  })}
                </section>
              )}
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
