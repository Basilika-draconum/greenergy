import Title from "@/components/Title/Title";
import React from "react";
import frequentlyQuestions from "@/public/content/questions.json";
import "./faq.css";

const Faq = () => {
  return (
    <section className="mb-9">
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
            type="button"
            className="bg-accentColor rounded-full py-[10px] px-3 text-description"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
