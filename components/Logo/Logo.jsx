import Image from "next/image";
import Ecosolution from "@/public/icons/ecosolution.svg"

const Logo = () => {
  return (
    <a
      className="cursor-pointer flex items-end gap-1"
      href="/"
      aria-label="logo"
     
    >
      <Image
        src="/icons/favicon.svg"
        alt="Logo"
        width={31}
        height={18}
        priority={true}
      />
      <Ecosolution
        alt="Ecosolution"
        width={170}
        height={25}
        priority="true"
        className="fill-primaryColor hover:fill-accentColor"
      />
      <Image
        src="/icons/greenergy.svg"
        alt="Greenergy"
        width={60}
        height={18}
        priority={true}
      />
    </a>
  );
};

export default Logo;
