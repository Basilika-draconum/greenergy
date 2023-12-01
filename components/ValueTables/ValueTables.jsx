import React from "react";
import values from "@/public/content/values.json";
import Image from "next/image";
import { oswald } from "@/fonts/fonts";

const ValueTables = () => {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {values.map(({ icon, title, description }, index) => (
        <li
          className="bg-bgForm px-3 pt-4 min-w-[148px] max-w-[190px] h-[197px]"
          key={index}
        >
          <div
            className={`${oswald.className} uppercase text-base mb-8 flex gap-2`}
          >
            <Image src={icon} width={16} height={16} alt={title} />
            <h3>{title}</h3>
          </div>
          <p className="text-subQuestion border-t-[1px] border-accentColor pt-3">
            {description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ValueTables;
{
  /* <Image
        src="/images/values1.jpg"
        width={346}
        height={234}
        alt="windfarms fields"
        className="md:hidden col-span-2"
      />
      <Image
        src="/images/values2.jpg"
        width={346}
        height={234}
        alt="man worker firld by solar panels"
        className="md:hidden col-span-2"
      /> */
}
