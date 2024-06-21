import React, { useState } from 'react';

const CardAccordion = ({ title, body }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="shadow-md mb-2">
        <div className={`flex justify-between items-center  
        hover:bg-cardHover-color ${isOpen ? 'bg-cardHover-color ' : 'bg-card-color'} py-4 px-8 mb-1 cursor-pointer transition-all`} onClick={() => setIsOpen(!isOpen)}>
          <h3 className="text-2xl font-normal">{title}</h3>
          <button className="text-6xl">{isOpen ? '-' : '+'}</button>
        </div>
        {isOpen && <div className="py-12 px-8 text-2xl bg-card-color text-left mt-0.5">{body}</div>}
      </div>
    );
  };

export default CardAccordion