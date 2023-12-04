"use client";
import React from "react";
import CaseSlider from "@/components/CaseSlider/CaseSlider";
import SliderButtons from "@/components/SliderButton/SliderButtons";
import Title from "@/components/Title/Title";

const Cases = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <section id="cases" className="section-main">
      <div className="container-main">
        <div className="tablet:flex tablet:justify-between tablet:mb-[38px]">
          <Title
            text={"Successful cases of our company"}
            className={"mb-6 w-[264px] tablet:mb-0 desktop:w-[398px]"}
          />
          <div
            className="relative mb-6 tablet:mb-0 tablet:before:content-[''] tablet:before:block tablet:before:z-10 tablet:before:absolute tablet:before:w-[1px]
  tablet:before:left-[-204px] tablet:before:bg-accentColor tablet:before:h-[65px] tablet:before:top-[10px] desktop:before:h-[96px] desktop:before:left-[-390px] desktop:before:top-[-10px]"
          >
            <SliderButtons />
            <p className="text-[28px] tracking-[-1.12px] font-light absolute top-[37px] tablet:top-[42px]  tablet:left-[-150px] desktop:left-[-200px]">
              {`0${activeIndex}`}
              <span className="text-bgMenu/25">/05</span>
            </p>
          </div>
        </div>
        <CaseSlider onSlideChange={handleSlideChange} />
      </div>
    </section>
  );
};

export default Cases;
