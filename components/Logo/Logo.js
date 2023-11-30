import Image from "next/image";

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
      <Image
        src="/icons/ecosolution.svg"
        alt="Ecosolution"
        width={170}
        height={18}
        priority={true}
        className="hoverClass"
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
