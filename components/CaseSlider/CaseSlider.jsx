"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import slides from "@/public/content/casesSlider.json";
import Image from "next/image";
import "./caseSlider.css";

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
  speed: 1000,
  breakpoints: {
    768: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
  // onSlideChange: () => console.log("slide change"),
};

const CaseSlider = () => {
  return (
    <Swiper {...carouselSettings}>
      {slides &&
        slides.map(({ id, photo, title, city, subtitle, date }, index) => (
          <SwiperSlide key={id} className=".swiper-slide-case">
            <div className="bg-bgForm">
              <Image
                src={photo}
                alt={title}
                width={320}
                height={224}
                loading="lazy"
                sizes="(max-width: 767px) 360px, (max-width: 1279px) 342px, 596px"
                className="image-slider"
              />
              <div className="p-3 pt-4 h-[140px] tablet:h-[154px] desktop:h-[210px] desktop:py-9 desktop:px-12">
                <div className="flex justify-between mb-4">
                  <div className="text-question tablet:text-[20px] tablet:tracking-[-0.8px] desktop:text-[22px] desktop:tracking-[-0.96px]">
                    <p>{city}</p>
                    <p className="w-[175px] tablet:w-[194px] desktop:w-[357px]">{title}</p>
                  </div>
                  <button
                    className="bg-accentColor rounded-full p-5 hover:bg-primaryColor ease duration-300 group"
                    type="button"
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      width={28}
                      height={28}
                      alt="reference"
                      className="-rotate-45 hoverClass"
                    />
                  </button>
                </div>
                <div className="flex justify-between border-t-[1px] border-accentColor pt-3 text-xs tracking-[-0.48px] tablet:text-subQuestion desktop:text-description desktop:pt-6">
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
