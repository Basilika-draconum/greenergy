import Image from "next/image";

const Address = () => {
  return (
    <address className="mb-6">
      <ul className="not-italic flex flex-col gap-6">
        <li>
          <p className="mb-2 text-description desktop:mb-4">Phone:</p>
          <ul className="flex flex-col gap-3 text-xl tracking-[-0.8px] desktop:text-2xl desktop:tracking-[-0.96px]">
            <li className="flex gap-2">
              <Image src="/icons/call.svg" width={24} height={24} alt="Phone" />
              <a
                href="tel:380981234567"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                38 (098) 12 34 567
              </a>
            </li>
            <li className="flex gap-2">
              <Image src="/icons/call.svg" width={24} height={24} alt="Phone" />
              <a
                href="tel:380931234567"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                38 (093) 12 34 567
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p className="mb-2 text-description desktop:mb-4">E-mail:</p>
          <div className="flex gap-2 ">
            <Image src="/icons/sms.svg" width={24} height={24} alt="Email" />
            <a
              href="mailto:office@ecosolution.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-xl tracking-[-0.8px] desktop:text-2xl desktop:tracking-[-0.96px]"
            >
              office@ecosolution.com
            </a>
          </div>
        </li>
        <li>
          <p className="mb-2 text-description desktop:mb-4">Address:</p>
          <div className="flex gap-2">
            <Image src="/icons/map.svg" width={24} height={24} alt="Address" />
            <a href="" target="_blank" rel="noopener noreferrer nofollow" className="text-xl tracking-[-0.8px] w-[212px] desktop:w-[434px] desktop:text-2xl desktop:tracking-[-0.96px]">
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </div>
        </li>
      </ul>
    </address>
  );
};

export default Address;
