import heroImg from "../assets/HeroPage.svg";
import { FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white pt-40 pb-20 " id="home">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 grid md:grid-cols-2 items-center gap-8">
        {/* Left Section: Text & Social Links */}
        <article>
          <h1 className="font-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-[#3C3C3C]">
            <span className="text-[#9F6D6D]">Escribiendo</span> con{" "}
            <span className="text-[#9F6D6D] font-hand">me</span>lissa
          </h1>
          <p className="font-body mt-4 text-2xl sm:text-3xl text-[#3C3C3C] capitalize tracking-wide">
            Mindfulness Coach
          </p>
          <p className="font-body mt-2 text-lg text-[#3C3C3C] capitalize tracking-wide">
            Terapias de escritura consciente
          </p>

          {/* Social Links */}
          <div className="flex gap-x-4 mt-6">
            <a
              href="https://instagram.com/melissae.a"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-8 w-8 text-[#3C3C3C] hover:text-[#9F6D6D] duration-300" />
            </a>
            <a
              href="https://www.facebook.com/share/1FTx7pSoVL/?mibextid=wwXIfr"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-8 w-8 text-[#3C3C3C] hover:text-[#9F6D6D] duration-300" />
            </a>
            <a
              href="https://open.spotify.com/show/5yH1ckw87LBJaqd9DIfcYw?si=h9rItPW8R9SgOEwMI0tD_w "
              aria-label="Spotify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify className="h-8 w-8 text-[#3C3C3C] hover:text-[#9F6D6D] duration-300" />
            </a>
            <a
              href="https://substack.com/@melissaescart?utm_campaign=profile&utm_medium=profile-page&utm_source=direct "
              aria-label="Substack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiSubstack className="h-7 w-7 text-[#3C3C3C] hover:text-[#9F6D6D] duration-300" />
            </a>
          </div>

          {/* Contact Button */}
          <div className="mt-10">
            <button
              onClick={scrollToContact}
              className="bg-[#3C3C3C] text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#9F6D6D] transition duration-300"
            >
              Contactar
            </button>
          </div>
        </article>

        {/* Right Section: Image */}
        <article className="md:flex justify-center">
          <img
            src={heroImg}
            alt="Mindfulness Coaching Illustration"
            className="max-w-full h-auto lg:h-96"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
