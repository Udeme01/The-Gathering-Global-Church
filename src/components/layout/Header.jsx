import React, { useEffect, useState, useRef, useCallback } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { Slant as Hamburger } from "hamburger-react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  return (
    <header
      ref={ref}
      className="bg-black text-white py-4 font-montserrat z-300 fixed top-0 right-0 left-0"
    >
      <section className="flex items-center justify-between mx-auto w-[90%] sm:w-[85%]">
        <Link to={`/`} onClick={() => setIsOpen(false)}>
          <img
            src="/images/tggc_logo.webp"
            alt="the gathering global church logo"
            className="w-32 h-auto"
          />
        </Link>
        <div className="lg:hidden z-500">
          <Hamburger ref={ref} size={20} toggled={isOpen} toggle={setIsOpen} />
        </div>
        <MobileNav isOpen={isOpen} isClose={() => setIsOpen(false)} />
        <DesktopNav />
      </section>
    </header>
  );
};

export default Header;
