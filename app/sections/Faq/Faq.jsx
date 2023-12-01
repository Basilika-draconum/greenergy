import Title from "@/components/Title/Title";
import React from "react";
import frequentlyQuestions from "@/public/content/questions.json";
import "./faq.css";
import Image from "next/image";

const Faq = () => {
  return (
    <section className="section-main" id="faq">
      <div className="container-main">
        <Title text={"Frequently Asked Questions"} className={"mb-6"} />
        <div className="mb-9">
          {frequentlyQuestions.map(({ id, question, answer }, index) => (
            <details
              className={`border-t-[1px] border-accentColor pt-4 mb-4 text-justify ${
                index === 0 ? "first-details-open" : ""
              }`}
              key={id}
              open={index === 0}
            >
              <summary className="text-question">{question}</summary>
              <p className="mt-4 text-subQuestion">{answer}</p>
            </details>
          ))}
        </div>
        <p className="mb-3 text-question">
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
    </section>
  );
};

export default Faq;
