"use client";
import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import { Link } from "react-scroll";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full pt-9 mb-[146px]">
      <div className="container-main flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex">
          <button
            onClick={toggleMenu}
            type="button"
            className="bg-secondaryColor px-3 py-3 border rounded-full hover:bg-accentColor transition ease duration-300 tablet:mr-3"
          >
            <Image
              src="/icons/menu.svg"
              alt="Menu"
              width={16}
              height={16}
              priority={true}
            />
          </button>
          {isMenuOpen && <Menu closeMenu={() => setMenuOpen(false)} />}
          <Link
            className="hidden cursor-pointer tablet:flex text-description rounded-full bg-accentColor items-center px-4 hover:text-accentColor hover:bg-primaryColor transition ease duration-300 group"
            to="contact"
            spy
            smooth
            duration="1500"
            href="/"
          >
            Get in touch
            <Image
              src="/icons/arrow-right.svg"
              alt="Menu"
              width={9}
              height={9}
              priority={true}
              className="ml-3 bg-primaryColor rounded-full rotate-90 transition ease duration-300 w-[14px] h-[14px] group-hover:bg-accentColor"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
