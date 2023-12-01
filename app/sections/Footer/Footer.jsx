import Logo from "@/components/Logo/Logo";
import SimpleAddress from "@/components/SimpleAddress/SimpleAddress";
import Socials from "@/components/Socials/Socials";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t-[1px] border-accentColor tablet:py-10">
      <div className="container-main ">
        <div className="mb-6 flex justify-between tablet:mb-4">
          <div className="flex flex-col gap-6 tablet:flex-row tablet:gap-[96px] tablet:items-end desktop:gap-[443px]">
            <Logo />
            <Socials className={"justify-center"} />
          </div>
          <button
            className="bg-accentColor rounded-full p-2 self-start hover:bg-primaryColor ease duration-300 transition hoverButton"
            type="button"
          >
            <Image
              src="/icons/arrow-right.svg"
              width={16}
              height={16}
              alt="on start"
              className="-rotate-90"
            />
          </button>
        </div>
        <div className="tablet:flex tablet:items-end tablet:gap-[50px] desktop:gap-[75px]">
          <SimpleAddress className={"mt-6 mb-2 tablet:mb-0 tablet:mt-0"} />
          <p className="text-description text-center">
            ecosolution © 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
