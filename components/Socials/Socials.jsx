import Image from "next/image";
import src from "@/public/content/socials.json";

const Socials = ({ className,show }) => {
  return (
    <ul className={`flex gap-2 ${className}`}>
      {src.map(({ src,srcW,href }, index) => (
        <li key={index}>
          <a href={href} target="blank" rel="noopener noreferrer nofollow " aria-label="social">
            <Image
              src={show? srcW:src}
              alt="Facebook"
              width={24}
              height={24}
              priority={true}
              className="hoverClass"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
