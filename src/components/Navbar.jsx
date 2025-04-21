import { useState, useEffect } from "react";
import { links } from "../data";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo2.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "	bg-[#F6EFE7] shadow-md py-1" : "bg-[#F6EFE7] py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <a
          href="/"
          className={`w-32 sm:w-40 transition-transform duration-300 ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-x-5">
          {links.map(({ id, href, text }) => (
            <a
              key={id}
              href={href}
              className="font-body font- capitalize text-xl tracking-wide text-[#3C3C3C] hover:text-[#9F6D6D] transition duration-300"
            >
              {text}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-2xl text-[#3C3C3C]  p-2 hover:text-[#9F6D6D]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[#F6EFE7] shadow-md py-3 flex flex-col items-center gap-y-3 z-50 transition-opacity duration-300 opacity-100">
          {links.map(({ id, href, text }) => (
            <a
              key={id}
              href={href}
              className="font-title capitalize text-lg tracking-wide text-[#3C3C3C] hover:text-[#9F6D6D] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
