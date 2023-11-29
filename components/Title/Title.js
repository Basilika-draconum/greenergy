import React from "react";
import { oswald } from "@/app/layout";

const Title = ({ text }) => {
  return <h2 className={oswald.className}> {text}</h2>;
};

export default Title;
