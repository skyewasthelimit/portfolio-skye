import React, { useState } from 'react';

export const Cards = () => {
  const [isCardExpanded, setCardExpanded] = useState(false);

  const toggleExpanded = () => {
    setCardExpanded(!isCardExpanded);
  };

  return (
    <div className="card-wrapper">
      <div onClick={toggleExpanded} className="card-1">Contact</div>
      {isCardExpanded && (
          <div className="card-1-expanded">Email: skyemclean87@gmail.com</div>
      )}
    </div>
  );
};
