"use client";
import React from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import slides from "@/public/content/casesSlider.json";
import Image from "next/image";

const carouselSettings = {
  spaceBetween: 25,
  initialSlide: 0,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  speed: 2000,
  breakpoints: {
    768: {
      spaceBetween: 25,
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 2,
    },
  },
  onSlideChange: () => console.log("slide change"),
};

const CaseSlider = () => {
  return (
    <Swiper {...carouselSettings}>
      {slides &&
        slides.map(({ id, photo, title, city, subtitle, date }, index) => (
          <SwiperSlide key={id} className="">
            <div className="bg-bgForm">
              <Image
                src={photo}
                alt={title}
                width={320}
                height={224}
                loading="lazy"
                sizes="(max-width: 767px) 360px, (max-width: 1279px) 400px, 600px"
              />
              <div className="p-3 pt-4">
                <div className="flex gap-[61px]">
                  <div className="text-question">
                    <p>{city}</p>
                    <p className="w-[175px]">{title}</p>
                  </div>
                  <button>Button</button>
                </div>
                <div className="flex justify-between border-t-[1px] border-accentColor pt-3 text-xs tracking-[-0.48px]">
                  <p>{subtitle}</p>
                  <p>{date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CaseSlider;
