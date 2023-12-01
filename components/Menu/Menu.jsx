import { Link } from "react-scroll";
import Image from "next/image";
import Socials from "../Socials/Socials";
import navLinks from "@/public/content/navigation.json";

const Menu = ({ closeMenu }) => {
  return (
    <div className="fixed top-0 right-0 w-full h-full backdrop-blur-sm z-49">
      <div className="fixed top-9 right-5 w-[320px] h-[calc(100%-72px)] bg-bgMenu bg-opacity-75 backdrop-blur-md  bg-flex items-center justify-center rounded-3xl">
        <div className="p-6 text-white flex flex-col gap-3">
          <div className="flex flex-col">
            <button
              className="cursor-pointer mb-[33px] text-xl flex items-center gap-1 after:content-[''] after:block after:absolute after:w-[272px] after:h-[1px] after:top-[56px]
  after:right-6 after:bg-white"
              onClick={closeMenu}
              type="button"
            >
              <Image
                src="/icons/close.svg"
                alt="Close"
                width={20}
                height={20}
                priority={true}
              />
              close
            </button>
            <div className="h-[500px] flex flex-col justify-between">
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ label, href, duration }) => (
                  <li
                    className="cursor-pointer text-2xl tracking-tighter"
                    key={href}
                  >
                    <Link
                      onClick={closeMenu}
                      to={href}
                      spy
                      smooth
                      activeClass="active"
                      duration={duration}
                      offset={-120}
                      className="flex gap-2 text-white/25 hover:text-white"
                    >
                      <p>{label}</p>
                      <Image
                        src="/icons/arrow-right-top.svg"
                        alt="Link"
                        width={20}
                        height={20}
                        priority={true}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
