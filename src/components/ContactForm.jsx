import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const FloatingInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = true,
}) => (
  <div className="relative w-full">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className=" font-body peer h-14 w-full border border-[#F6EFE7] rounded-lg px-4 pt-5 text-base text-[#3C3C3C] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#9F6D6D] focus:border-[#9F6D6D] transition-all"
      placeholder={placeholder}
    />
    <label
      htmlFor={name}
      className=" font-body absolute left-4 top-4 text-[#3C3C3C] text-sm transition-all duration-200 transform scale-100 origin-left 
        peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 
        peer-focus:scale-75 peer-focus:-translate-y-1.5 peer-focus:text-[#9F6D6D]"
    >
      {placeholder}
    </label>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className="bg-white mx-auto max-w-6xl px-6 py-20 sm:px-10 scroll-mt-20"
      id="contact"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 text-center">
        <h2 className="text-4xl sm:text-4xl tracking-wider capitalize font-title font-bold text-[#3C3C3C] mb-4">
          Contacta Conmigo
        </h2>
        <p className="text-lg sm:text-xl text-[#3C3C3C] font-body mb-12">
          Si tienes alguna pregunta o deseas más información, ¡estoy aquí para
          ayudarte!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start justify-center py-10">
          {/* Contact Info */}
          <div className="space-y-8 lg:space-y-6 lg:px-0">
            <h3 className=" font-title text-xl font-semibold text-[#3C3C3C] mb-10 text-start">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MdOutlineEmail className="h-7 w-7 text-[#9F6D6D]" />
                <p className=" text-[#3C3C3C] font-body text-lg">
                  melissa@escribiendome.com
                </p>
              </div>
              <div className="flex items-center space-x-4"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white p-8 rounded-2xl shadow-xl space-y-6 mx-auto"
            >
              <FloatingInput
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nombre"
              />
              <FloatingInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Correo Electrónico"
              />
              <FloatingInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Teléfono"
              />
              <div className="relative w-full">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="peer w-full border border-[#F6EFE7] rounded-lg px-4 pt-5 text-base text-[#3C3C3C] font-body placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#9F6D6D] transition-all"
                  placeholder="Mensaje"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-[#3C3C3C] font-body text-sm transition-all duration-200 transform scale-100 origin-left 
                    peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 
                    peer-focus:scale-75 peer-focus:-translate-y-1.5 peer-focus:text-[#9F6D6D]"
                >
                  Mensaje
                </label>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#3C3C3C] text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#9F6D6D] transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
