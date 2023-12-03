"use client";
import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Logo from "@/components/Logo/Logo";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll=() =>{
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header
      className={`w-full py-9 fixed z-20 ${isScrolled ? "scrolled" : "static"}`}
    >
      <div className="container-main flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex">
          <button
            onClick={toggleMenu}
            type="button"
             aria-label="ecosolution"
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
          <ButtonLink text={"Get in touch"} section={"contact"} className={"hidden tablet:flex"}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
