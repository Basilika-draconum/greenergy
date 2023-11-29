"use client";
import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full pt-9">
      <div className="container-main flex items-center justify-between">
        <div>
          <a
            className="cursor-pointer self-center flex gap-1"
            href="/"
            aria-label="logo"
          >
            <Image
              src="/icons/favicon.svg"
              alt="Logo"
              width={31}
              height={18}
              priority={true}
            />
            <Image
              src="/icons/ecosolution.svg"
              alt="Logo"
              width={170}
              height={18}
              priority={true}
            />
            <Image
              src="/icons/greenergy.svg"
              alt="Logo"
              width={60}
              height={18}
              priority={true}
            />
          </a>
        </div>
        <div className="flex">
          <button
            onClick={toggleMenu}
            type="button"
            className="bg-secondaryColor px-3 py-3 border rounded-full"
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
          <button className="hidden tablet:flex" type="button">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
