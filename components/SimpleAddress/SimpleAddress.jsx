import { address } from "@/public/content/address.js";

const SimpleAddress = ({ className }) => {
  return (
    <address className={className}>
      <ul className="not-italic flex flex-col gap-2 items-center tablet:flex-row tablet:gap-[77px] desktop:gap-[424px]">
        {address.map(({ desc, aria, href }) => (
          <li key={desc} className="text-description cursor-pointer">
            <a
              href={href}
              aria-label={aria}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {desc}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};

export default SimpleAddress;
