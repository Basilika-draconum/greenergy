import "./sliderButtons.css";
import Image from "next/image";

const SliderButtons = () => {
  return (
    <div className="flex ml-auto h-[66px] relative mr-0 w-[150px]">
      <button
        type="button"
        className="swiper-button swiper-button-prev"
        aria-label="button-back"
      >
        <Image
          width={36}
          height={36}
          src="/icons/arrow-right.svg"
          alt="Arrow"
        />
      </button>

      <button
        type="button"
        className="swiper-button swiper-button-next"
        aria-label="button-next"
      >
        <Image
          width={36}
          height={36}
          src="/icons/arrow-right.svg"
          alt="Arrow"
        />
      </button>
    </div>
  );
};

export default SliderButtons;
