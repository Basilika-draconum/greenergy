import Address from "@/components/Address/Address";
import ContactForm from "@/components/ContactForm/ContactForm";
import Socials from "@/components/Socials/Socials";
import Title from "@/components/Title/Title";

const Contact = () => {
  return (
    <section className="mb-9">
      <div className="container-main">
        <Title text={"Contact us"} className={"text-center"} />
        <div className="mt-6">
          <div className="mb-6">
            <Address />
            <p className="mb-5">Social Networks:</p>
            <Socials className={"gap-8"} />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
