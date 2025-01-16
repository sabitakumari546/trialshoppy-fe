import React from 'react';

const Womensclothing = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-4">
    {/* <div className="flex overflow-x-auto max-w-full sm:flex-row sm:overflow-visible sm:max-w-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"> */}
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-2"
          // className="flex-shrink-0 w-40 h-42 rounded-lg mx-7 p-2 sm:w-32 sm:h-32 sm:mx-4 sm:p-1 md:w-48 md:h-48 md:mx-6 md:p-2 lg:w-56 lg:h-56 lg:mx-8 lg:p-3 xl:w-64 xl:h-64 xl:mx-10 xl:p-4"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-44 object-cover rounded-md"
            // className="w-full h-44 object-cover rounded-md sm:w-64 sm:h-32 md:w-80 md:h-40 lg:w-96 lg:h-48 xl:w-120 xl:h-56"
          />
          {/* <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12"> */}
          <div className="mt-4">
            <p className="w-134 h-30 font-poppins font-bold text-center leading-[150%]">{card.title}</p>
            {/* <p className="w-134 h-30 font-poppins font-bold text-center leading-[150%] sm:w-96 sm:h-20 sm:text-base sm:leading-normal">{card.title}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Womensclothing;

