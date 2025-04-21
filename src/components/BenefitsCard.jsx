const BenefitsCard = ({ icon, title, text }) => {
  return (
    <article className="text-center pb-15">
      <div className="flex justify-center items-center mb-4">
        <span>{icon}</span>
      </div>

      <h4 className="mt-6 font-bold text-[#3C3C3C] font-title ">{title}</h4>
      <p className="mt-2 text-[#3C3C3C] font-body">{text}</p>
    </article>
  );
};

export default BenefitsCard;
