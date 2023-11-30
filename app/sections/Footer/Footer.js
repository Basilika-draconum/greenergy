import Logo from "@/components/Logo/Logo";
import SimpleAddress from "@/components/SimpleAddress/SimpleAddress";
import Socials from "@/components/Socials/Socials";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t-[1px] border-accentColor">
      <div className="container-main ">
        <div className="mb-6">
          <Logo />
        </div>
        <Socials className={"justify-center"} />
        <div className="mb-9 tablet:flex tablet:items-end tablet:gap-[50px] desktop:gap-[75px]">
          <SimpleAddress className={"mt-6"} />
          <p className="hidden text-description tablet:block">
            ecosolution © 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
