import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quote = () => {
  return (
    <section className="bg-[#F6EFE7] py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 text-center">
        {/* Top Lines with Quote Symbol */}
        <div className="flex items-center justify-center gap-8 mb-6">
          <div className="w-2/5 h-[1.5px] bg-[#9F6D6D]"></div>
          <FaQuoteLeft className="text-4xl text-[#9F6D6D]" />
          <div className="w-2/5 h-[1.5px] bg-[#9F6D6D]"></div>
        </div>

        {/* Quote Text */}
        <blockquote className=" font-hand mx-auto max-w-4xl text-xl sm:text-2xl lg:text-3xl font-semibold italic tracking-wider text-[#3C3C3C] leading-tight">
          La escritura es el puente entre el alma y el papel.
        </blockquote>
        <p className="mt-4 text-lg sm:text-xl text-[#9F6D6D] tracking-wide font-body">
          — Melissa Escobar Arellano
        </p>

        {/* Bottom Lines with Quote Symbol */}
        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="w-2/5 h-[1.5px] bg-[#9F6D6D]"></div>
          <FaQuoteRight className="text-4xl text-[#9F6D6D]" />
          <div className="w-2/5 h-[1.5px] bg-[#9F6D6D]"></div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
