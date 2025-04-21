import aboutPic from "../assets/aboutpic.png";

const About = () => {
  return (
    <section className="bg-[#F6EFE7] py-20 scroll-mt-20 " id="about">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Heading */}

        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left: Image */}
          <article className="flex justify-center">
            <img
              src={aboutPic}
              alt="Portrait of Melissa Escobar Arellano"
              className="w-64 sm:w-80 md:w-full lg:w-[60%] max-w-sm md:max-w-full h-auto rounded-2xl shadow-lg"
            />
          </article>

          {/* Right: Text */}
          <article>
            <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold font-title tracking-wider text-[#3C3C3C] text-start mb-12">
              Melissa Escobar Arellano
            </h2>
            <p className="text-2xl sm:text-3xl font-title text-[#3C3C3C] capitalize tracking-wide mb-4">
              Mindfulness Coach
            </p>
            <div className="text-lg text-[#3C3C3C] tracking-wide font-body leading-relaxed space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                asperiores vel sint iusto soluta voluptatem nesciunt excepturi
                molestiae neque.
              </p>
              <p>
                Voluptas, tenetur! Quos, excepturi dolores harum incidunt illo
                itaque nulla mollitia! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <p>
                Provident aperiam voluptate dolores blanditiis voluptatum error
                facilis ea esse repellat vitae reprehenderit placeat quia,
                facere amet consequuntur ipsa corporis. Hic, corrupti!
              </p>
              <p>
                Facere, autem accusantium ullam obcaecati deserunt, asperiores
                mollitia animi sint itaque labore libero error. Laborum, sint
                unde. Possimus aliquid eos ad atque.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
