import React, { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { Divide as Hamburger } from "hamburger-react";
import { NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-black text-white py-8 font-montserrat">
      <section className="flex items-center justify-between mx-auto w-[90%] sm:w-[85%]">
        <NavLink to={`/`}>
          <img
            src="/images/tggc_logo.webp"
            alt="the gathering global church logo"
          />
        </NavLink>
        <div className="lg:hidden z-500">
          <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
        </div>
        <MobileNav isOpen={isOpen} />
        <DesktopNav />
      </section>
    </header>
  );
};

export default Header;
