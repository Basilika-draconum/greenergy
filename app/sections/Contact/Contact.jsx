import Address from "@/components/Address/Address";
import ContactForm from "@/components/ContactForm/ContactForm";
import Socials from "@/components/Socials/Socials";
import Title from "@/components/Title/Title";

const Contact = () => {
  return (
    <section className="section-main" id="contact">
      <div className="container-main">
        <Title
          text={"Contact us"}
          className={
            "text-center w-[286px] mx-auto tablet:mb-10 desktop:mb-[120px]"
          }
        />
        <div className="mt-6 tablet:flex tablet:gap-[122px] tablet:justify-between">
          <div className="mb-6">
            <Address />
            <p className="mb-5 text-description desktop:mb-4">
              Social Networks:
            </p>
            <Socials className={"gap-8 desktop:gap-2"} />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
