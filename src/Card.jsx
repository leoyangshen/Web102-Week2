// src/Card.js
import React, { useState } from 'react';
import './Card.css'; // Import the CSS for styling

function Card({ frontContent, backContent }) { // Object destructuring for props
  const [isFlipped, setIsFlipped] = useState(false); // State to manage flip status

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flipped state
  };

  // Conditionally add the 'flipped' class based on the state
  const cardClass = `card ${isFlipped ? 'flipped' : ''}`;

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={cardClass}>
        {/* Front Face */}
        <div className="card-face card-front">
          {frontContent}
        </div>

	  {/* Back Face */}
        <div className="card-face card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default Card;
