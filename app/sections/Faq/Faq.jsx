import Title from "@/components/Title/Title";
import React from "react";
import frequentlyQuestions from "@/public/content/questions.json";
import "./faq.css";
import Image from "next/image";

const Faq = () => {
  return (
    <section className="section-main" id="faq">
      <div className="container-main tablet:grid tablet:grid-cols-2  tablet:grid-rows-2 tablet:gap-6 desktop:gap-[185px]">
        <Title text={"Frequently Asked Questions"} className={"mb-6 tablet:col-start-2 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2 tablet:mb-0 desktop:text-2xl"} />
        <div className="mb-9 max-w-[345px] mx-auto tablet:mx-0 tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-3 tablet:mb-0 desktop:max-w-[516px]">
          {frequentlyQuestions.map(({ id, question, answer }, index) => (
            <details
              className={`border-t-[1px] border-accentColor pt-4 mb-4 text-justify ${
                index === 0 ? "first-details-open" : ""
              }`}
              key={id}
              open={index === 0}
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
            <button
              className="cursor-pointer py-[10px] flex text-description rounded-full bg-accentColor items-center px-4 hover:text-accentColor hover:bg-primaryColor transition ease duration-300 group"
              // to="contact"
              // spy
              // smooth
              // duration="1500"
              href="/"
            >
              Contact Us
              <Image
                src="/icons/arrow-right.svg"
                alt="Menu"
                width={9}
                height={9}
                priority={true}
                className="ml-3 bg-primaryColor rounded-full rotate-90 transition ease duration-300 w-[14px] h-[14px] group-hover:bg-accentColor"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
