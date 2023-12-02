"use client"
import React from "react"
import Title from "@/components/Title/Title";
import frequentlyQuestions from "@/public/content/questions.json";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import "./faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(0);
  const handleToggleDetail = (index) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }
  return (
    <section className="section-main" id="faq">
      <div className="container-main tablet:grid tablet:grid-cols-2  tablet:grid-rows-2 tablet:gap-6 desktop:gap-[185px]">
        <Title text={"Frequently Asked Questions"} className={"mb-6 tablet:col-start-2 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2 tablet:mb-0 desktop:text-2xl"} />
        <div className="mb-9 max-w-[345px] mx-auto tablet:mx-0 tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-3 tablet:mb-0 desktop:max-w-[516px]">
          {frequentlyQuestions.map(({ id, question, answer }, index) => (
            <details
              className={`border-t-[1px] border-accentColor pt-4 mb-4 text-justify ${
                index === openIndex ? "first-details-open" : ""
              }`}
              key={id}
              open={index === openIndex}
              onClick={(e) => { e.preventDefault(); handleToggleDetail(index); }}
            >
              <summary className="text-question desktop:text-2xl desktop:tracking-[-0.96px] before:content-linkAdd before:absolute before:top-[18px] before:left-[-31px] before:w-[16px] before:h-[16px] desktop:before:top-[17px]">{question}</summary>
              <p className="mt-4 text-subQuestion desktop:text-description">{answer}</p>
            </details>
          ))}
        </div>
        <div className="tablet:col-start-2 tablet:col-end-3 tablet:row-start-2 tablet:row-end-3 tablet:flex tablet:flex-col tablet:justify-end tablet:pb-3">
          <p className="mb-3 text-question text-center desktop:text-2xl">
            Didn&#39;t find the answer to your question?
          </p>
          <div className="flex justify-center">
             <ButtonLink text={"Contact Us"} section={"contact"} className={"py-[10px] flex"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
