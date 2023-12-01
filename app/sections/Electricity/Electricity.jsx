import Title from "@/components/Title/Title";
import React from "react";
import { oswald } from "@/app/layout";

const Electricity = () => {
  return (
    <section className="section-main" id="electricity">
      <div className="container-main">
        <Title
          text={"Electricity we produced for all time"}
          className={
            "text-center w-[286px] mx-auto tablet:w-[368px] desktop:w-[491px]"
          }
        />
        <div className="relative">
          <p
            className="flex justify-center items-center mt-24 text-center text-2xl leading-6 tablet:mt-[135px] tablet:text-[28px] tablet:leading-[48px] desktop:text-5xl desktop:mt-[120px] before:content-[''] before:block before:z-10 before:absolute before:w-[1px] before:h-[48px] before:top-[-65px]
  before:inset-x-2/4 before:bg-accentColor tablet:before:h-[87px] tablet:before:top-[-103px] desktop:before:top-[-91px]"
          >
            <span
              className={`${oswald.className} mr-2 font-bold text-5xl text-accentColor tablet:text-[100px] tablet:mr-6 desktop:text-[164px]`}
            >
              1.134.147.814
            </span>
            kWh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Electricity;
