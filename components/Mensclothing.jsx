

const Mensclothing = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-2"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-44 object-cover rounded-md"
          />
          <div className="mt-4">
            <p className="w-full h-30 font-poppins font-bold text-center leading-[150%]">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mensclothing;
