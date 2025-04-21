import { benefits } from "../data";
import BenefitsCard from "./BenefitsCard";
import SectionTitle from "./SectionTitle";

const Benefits = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:px-10 scroll-mt-20 "
      id="benefits"
    >
      <SectionTitle text="Beneficios de la escritura consciente" />
      <div className="pt-15 grid gap-4 text-center md:grid-cols-2 lg:grid-cols-3 scroll-mt-20">
        {benefits.map((benefit) => {
          return <BenefitsCard key={benefit.id} {...benefit} />;
        })}
      </div>
    </section>
  );
};

export default Benefits;
