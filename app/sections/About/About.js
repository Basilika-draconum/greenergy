import Title from "@/components/Title/Title";
import ValueTables from "@/components/ValueTables/ValueTables";
import React from "react";

const About = () => {
  return (
    <section className="mb-9">
      <div className="container-main">
        <Title text={"Main values of our company "} className={"w-[250px]"} />
        <p className="text-description mt-6 mb-9 text-justify">
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&prime;s energy needs.
        </p>
        <ValueTables />
      </div>
    </section>
  );
};

export default About;
