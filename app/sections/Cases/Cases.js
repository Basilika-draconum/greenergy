import CaseSlider from "@/components/CaseSlider/CaseSlider";
import SliderButtons from "@/components/SliderButton/SliderButtons";
import Title from "@/components/Title/Title";
import React from "react";

const Cases = () => {
  return (
    <section id="cases" className="section-main">
      <div className="container-main">
        <Title
          text={"Successful cases of our company"}
          className={"mb-6 w-[264px]"}
        />
        <div className="relative mb-6">
          <SliderButtons />
          <p className="text-[28px] tracking-[-1.12px] font-light absolute top-[42px]">
            01
            <span className="text-bgMenu/25">/05</span>
          </p>
        </div>
        <CaseSlider />
      </div>
    </section>
  );
};

export default Cases;
