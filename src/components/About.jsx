import melissa from "../assets/Melissa.jpg";

const About = () => {
  return (
    <section className="bg-[#F6EFE7] py-20 scroll-mt-20 " id="about">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Heading */}

        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left: Image */}
          <article className="flex justify-center">
            <img
              src={melissa}
              loading="lazy"
              alt="Portrait of Melissa Escobar Arellano"
              className="w-64 sm:w-80 md:w-full lg:w-[75%] max-w-sm md:max-w-full h-auto rounded-2xl shadow-lg"
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
                Mi propósito personal es poder ser cada vez más yo, estar
                conectada a mi centro y a mi esencia, porque sé que ese es mi
                poder. Desde ese lugar, puedo crear cualquier cosa cimentada en
                lo que soy y en mi verdad, y transformar la vida de las personas
                a través de lo que hago.
              </p>
              <p>
                El amor por el arte y la escritura, y el deseo de encontrar un
                camino más auténtico en mi vida, me llevaron a crear este
                espacio. A través de la escritura consciente, descubrí que podía
                hacerme preguntas que me acercaran más a mi verdadero ser. Este
                proceso de autodescubrimiento me inspiró a compartir esta
                herramienta con otros, para que puedan encontrar la misma paz y
                claridad que yo experimenté.
              </p>
              <p>
                Mis valores son el amor, la autenticidad, la libertad, el
                aprendizaje y el optimismo. Guiada por estos principios, en mis
                sesiones creo un espacio seguro, libre de juicios, donde cada
                persona puede explorar su mundo interior y encontrar las
                respuestas que busca.
              </p>
              <p>
                La escritura es mi forma de ver el mundo, de entenderme a mí
                misma y conectar con lo sagrado dentro de mí. Esta práctica me
                ha permitido sanar, crecer y reconectar con mi esencia, y ahora
                quiero compartirla contigo.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
