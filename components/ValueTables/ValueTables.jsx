import React from "react";
import values from "@/public/content/values.json";
import Image from "next/image";
import { oswald } from "@/fonts/fonts";
import "./valueTables.css"

const ValueTables = () => {
  return (
    <ul className="valueTable">
      {values.map(({ icon, title, description, className, picture, alt }, index) => (
        icon && title && description ? <li
          className={`bg-bgForm px-3 pt-4 min-w-[148px] max-w-[190px] h-[197px] desktop:h-[300px] desktop:max-w-[254px] desktop:px-5 desktop:py-12 desktop:w-[243px] ${className}`}
          key={index}
        >
          <div
            className={`${oswald.className} uppercase text-base mb-8 flex items-center gap-2 tablet:text-lg desktop:gap-[6px] desktop:text-[30px] desktop:mb-[94px]`}
          >
            <Image src={icon} width={16} height={16} alt={title} className="desktop:w-6 desktop:h-6" />
            <h3>{title}</h3>
          </div>
          <p className="text-subQuestion border-t-[1px] border-accentColor pt-3 desktop:text-description desktop:pt-6">
            {description}
          </p>
        </li> : <li key={index} className={className}>
            <Image src={picture} width={596} height={339} alt={alt}  sizes="(max-width: 1279px) 342px, 534px"/>
        </li>
      ))}
    </ul>
  );
};

export default ValueTables;