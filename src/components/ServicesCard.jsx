const ServicesCard = ({ img, title, text }) => {
  return (
    <article className="bg-white p-8  rounded-2xl shadow-md hover:shadow-xl duration-300 text-center">
      <div className="h-70 flex items-center justify-center mb-6">
        <img src={img} alt={title} className="w-70 h-auto" />
      </div>
      <h2 className="font-title text-xl pb-4">{title}</h2>
      <p className="font-body text-[#3C3C3C]">{text}</p>
    </article>
  );
};

export default ServicesCard;
