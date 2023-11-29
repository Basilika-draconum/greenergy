import Socials from "@/components/Socials/Socials";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t-[1px] border-accentColor ">
      <div className="container-main ">
        <div className="mb-6">
          <a className="cursor-pointer flex gap-1" href="/" aria-label="logo">
            <Image
              src="/icons/favicon.svg"
              alt="Logo"
              width={31}
              height={18}
              priority={true}
            />
            <Image
              src="/icons/ecosolution.svg"
              alt="Ecosolution"
              width={170}
              height={18}
              priority={true}
            />
            <Image
              src="/icons/greenergy.svg"
              alt="Greenergy"
              width={60}
              height={18}
              priority={true}
            />
          </a>
        </div>
        <Socials className={"justify-center"} />
        <address className="mt-6">
          <ul className="not-italic flex flex-col gap-4 items-center">
            <li className="text-description">
              <a href="" target="_blank" rel="noopener noreferrer">
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </li>
            <li className="text-description cursor-pointer">
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            </li>
            <li className="text-description">
              <p>ecosolution © 2023</p>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
