import CaseSlider from "@/components/CaseSlider/CaseSlider";
import Title from "@/components/Title/Title";
import React from "react";

const Cases = () => {
  return (
    <section id="cases" className="section-main">
      <div className="container-main">
        <Title text={"Successful cases of our company"} className={"mb-24"} />
        <CaseSlider />
      </div>
    </section>
  );
};

export default Cases;
