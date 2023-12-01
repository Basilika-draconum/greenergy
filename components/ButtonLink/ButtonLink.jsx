"use client";
import Image from "next/image";
import { Link } from "react-scroll";

const ButtonLink = ({ text, section, className }) => {
  return (
    <Link
      className={`cursor-pointer text-description rounded-full bg-accentColor items-center px-4 ${className} hover:text-accentColor hover:bg-primaryColor transition ease duration-300 group`}
      to={section}
      spy
      smooth
      duration={1500}
      offset={-120}
      href="/"
    >
      {text}
      <Image
        src="/icons/arrow-right.svg"
        alt="Arrow"
        width={9}
        height={9}
        priority={true}
        className="ml-3 bg-primaryColor rounded-full rotate-90 transition ease duration-300 w-[14px] h-[14px] group-hover:bg-accentColor"
      />
    </Link>
  );
};

export default ButtonLink;
