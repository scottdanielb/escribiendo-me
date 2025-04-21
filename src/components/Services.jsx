import { services } from "../data";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:px-10 scroll-mt-20"
      id="services"
    >
      <h2 className=" text-center text-4xl sm:text-4xl tracking-wider capitalize font-title font-bold text-[#3C3C3C] mb-4">
        Servicios
      </h2>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-2  gap-8">
        {services.map((service) => {
          return <ServicesCard key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
