import React from "react";
import { oswald } from "@/app/layout";

const Title = ({ text, className }) => {
  return (
    <h2
      className={`${oswald.className} text-titleH2 flex justify-start uppercase tablet:text-titleH2Tablet desktop:text-titleH2Desktop ${className}`}
    >
      {text}
    </h2>
  );
};

export default Title;
