import dynamic from "next/dynamic";
const Main = dynamic(() => import("./sections/Main/Main"));
const About = dynamic(() => import("./sections/About/About"));
const Electricity = dynamic(() => import("./sections/Electricity/Electricity"));
const Cases = dynamic(() => import("./sections/Cases/Cases"));
const Faq = dynamic(() => import("./sections/Faq/Faq"));
const Contact = dynamic(() => import("./sections/Contact/Contact"));
const Footer = dynamic(() => import("./sections/Footer/Footer"));

export default function Home() {
  return (
    <>
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
