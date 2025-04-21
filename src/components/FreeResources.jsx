import FreeResourcesCard from "./FreeResourcesCard";
import { freeResources } from "../data";

const FreeResources = () => {
  return (
    <section className=" scroll-mt-20 bg-[#F6EFE7]" id="resources">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:px-10">
        <h2 className=" text-center text-4xl sm:text-4xl tracking-wider capitalize font-title font-bold text-[#3C3C3C] mb-4">
          Material Gratuito
        </h2>
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 sm:py-20 gap-8">
          {freeResources.map((resource) => {
            return <FreeResourcesCard key={resource.id} {...resource} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
