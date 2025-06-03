const FreeResourcesCard = ({ img, href, title, text }) => {
  return (
    <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="font-title pb-6 text-center">{title}</h2>
        <p className="font-body">{text}</p>
      </div>

      <div className="flex  justify-center">
        <a
          href={href}
          download
          className="bg-[#3C3C3C] text-white py-3 px-10 rounded-lg hover:bg-[#9F6D6D] transition duration-300 text-center  "
        >
          Descargar
        </a>
      </div>
    </article>
  );
};

export default FreeResourcesCard;
