import Title from "@/components/Title/Title";
import ValueTables from "@/components/ValueTables/ValueTables";

const About = () => {
  return (
    <section className="section-main" id="about">
      <div className="container-main">
        <div className="tablet:flex tablet:justify-between tablet:mb-[100px] ">
          <Title
            text={"Main values of our company "}
            className={"w-[250px] tablet:w-[272px] desktop:w-[365px]"}
          />
          <p className="text-description mt-6 mb-9 text-justify tablet:w-[342px] tablet:my-0 tablet:border-l-[1px] tablet:border-accentColor tablet:pl-[11px] desktop:w-[600px] desktop:pl-[160px] ">
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world&prime;s energy needs.
          </p>
        </div>
        <ValueTables />
      </div>
    </section>
  );
};

export default About;
