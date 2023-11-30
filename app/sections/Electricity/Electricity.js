import Title from "@/components/Title/Title";
import React from "react";
import { oswald } from "@/app/layout";

const Electricity = () => {
  return (
    <section className="section-main" id="electricity">
      <div className="container-main">
        <Title
          text={"Electricity we produced for all time"}
          className={"text-center"}
        />
        <p className="mt-24 text-2xl leading-6">
          <span
            className={`${oswald.className} font-bold text-5xl text-accentColor`}
          >
            1.134.147.814
          </span>{" "}
          kWh
        </p>
      </div>
    </section>
  );
};

export default Electricity;
