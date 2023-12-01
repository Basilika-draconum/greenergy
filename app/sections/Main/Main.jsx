"use client";
import { oswald } from "@/fonts/fonts";
import Image from "next/image";
import SimpleAddress from "@/components/SimpleAddress/SimpleAddress";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <section className="section-main pt-[222px]" id="main">
      <div className="container-main ">
        <div className="tablet:flex tablet:justify-between border-b-[1px] border-accentColor">
          <h1
            className={`${oswald.className} uppercase w-80 text-4xl leading-9 mb-6 tablet:text-5xl tablet:w-[301px] desktop:text-[64px] desktop:w-[485px]`}
          >
            RENEWABLE ENERGY for any task
          </h1>
          <div>
            <p className="text-description mb-6 tablet:w-[342px] tablet:mb-11 desktop:w-[369px] desktop:mb-5">
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <div className="flex justify-center mb-6 tablet:justify-start desktop:mb-7">
              <Link
                to="cases"
                spy
                smooth
                duration={1500}
                offset={-120}
                className="border border-accentColor rounded-full flex items-center p-1 pl-3 gap-3 text-description hover:bg-primaryColor hover:border-primaryColor hover:text-accentColor transition ease duration-300"
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
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-9 tablet:flex tablet:items-end tablet:gap-[50px] desktop:gap-[75px]">
          <SimpleAddress className={"mt-6"} />
          <p className="hidden text-description tablet:block">
            ecosolution © 2023
          </p>
        </div>
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
