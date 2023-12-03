import Image from "next/image";
import { phone, address } from "@/public/content/address.js";

const Address = () => {
  const reversedAddress = [];
  for (let i = address.length - 1; i >= 0; i--){
    reversedAddress.push(address[i])
  }
  return (
    <address className="mb-6">
      <ul className="not-italic flex flex-col gap-6">
        <li>
          <p className="mb-2 text-description desktop:mb-4">Phone:</p>
          <ul className="flex flex-col gap-3 text-xl tracking-[-0.8px] desktop:text-2xl desktop:tracking-[-0.96px]">
            {phone.map(({ tel, href }) => (
              <li key={tel} className="flex gap-2 hoverButton">
                <Image
                  src="/icons/call.svg"
                  width={24}
                  height={24}
                  alt="Phone"
                />
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="phone"
                >
                  {tel}
                </a>
              </li>
            ))}
          </ul>
        </li>
        {reversedAddress.map(({ title, desc, aria, href, icon }) => (
          <li key={desc}>
            <p className="mb-2 text-description desktop:mb-4">{title}</p>
            <div className="flex gap-2 hoverButton">
              <Image src={icon} width={24} height={24} alt={aria} />
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-xl tracking-[-0.8px] w-[212px] desktop:w-[434px] desktop:text-2xl desktop:tracking-[-0.96px]"
                aria-label={aria}
              >
                {desc}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </address>
  );
};

export default Address;
