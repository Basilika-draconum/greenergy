
const SimpleAddress = ({ className }) => {
  return (
    <address className={className}>
      <ul className="not-italic flex flex-col gap-2 items-center tablet:flex-row tablet:gap-[77px] desktop:gap-[424px]">
        <li className="text-description">
          <a href="https://maps.google.com/?q=79005, Ukraine, Lvivstreet. Shota Rustaveli, 7" target="_blank" rel="noopener noreferrer nofollow">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
        </li>
        <li className="text-description cursor-pointer">
          <a
            href="mailto:office@ecosolution.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            office@ecosolution.com
          </a>
        </li>
      </ul>
    </address>
  );
};

export default SimpleAddress;
