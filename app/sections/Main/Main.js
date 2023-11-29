// "use client";
import React from "react";
// import { Link } from "react-scroll";

import { oswald } from "@/app/layout";
import Image from "next/image";

const Main = () => {
  return (
    <section className="mb-12">
      <div className="container-main ">
        <h1 className={`${oswald.className} uppercase text-4xl leading-9 mb-6`}>
          RENEWABLE ENERGY for any task
        </h1>
        <p className="text-description mb-6 ">
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <div
          className="flex justify-center mb-[49px] relative after:content-[''] after:block after:z-10 after:absolute after:w-[calc(100%-2px)] after:h-[1px] after:top-[65px]
  after:right-0 after:bg-accentColor"
        >
          <button
            type="button"
            className="border border-accentColor rounded-full flex items-center p-1 pl-3 gap-3 text-description hover:bg-primaryColor hover:border-primaryColor hover:text-accentColor"
          >
            Learn more
            <div className="bg-accentColor rounded-full p-2 ">
              <Image
                width={16}
                height={16}
                src="/icons/arrow-right.svg"
                alt="Arrow"
              />
            </div>
          </button>
        </div>
        <address className="mb-[36px]">
          <ul className="not-italic flex flex-col gap-2 items-center">
            <li className="text-description">
              <a href="" target="_blank" rel="noopener noreferrer">
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </li>
            <li className="text-description cursor-pointer">
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            </li>
          </ul>
        </address>
        <Image
          width={1242}
          height={629}
          src="/images/main-pic.jpg"
          alt="Wind turbine"
          loading="lazy"
          sizes="(max-width: 767px) 320px, (max-width: 1279px) 709px, 1242px"
        />
      </div>
    </section>
  );
};
export default Main;
