import React from "react";
import values from "@/public/content/values.json";
import Image from "next/image";
import { oswald } from "@/app/layout";

const ValueTables = () => {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {values.map(({ icon, title, description }, index) => (
        <li className="bg-bgForm px-3 pt-4 w-[148px] h-[197px]" key={index}>
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
