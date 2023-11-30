import Image from "next/image";

const Socials = ({ className }) => {
  return (
    <ul className={`flex gap-2 ${className}`}>
      <li>
        <a href="#" target="blank" rel="noopener noreferrer nofollow">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            priority={true}
          />
        </a>
      </li>
      <li>
        <a href="#" target="blank" rel="noopener noreferrer nofollow">
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
            priority={true}
          />
          {/* <Facebook className="fill-white" /> */}
          {/* <Facebook width={24} height={24} stroke={"red"} alt="Facebook" /> */}
        </a>
      </li>
    </ul>
  );
};

export default Socials;
