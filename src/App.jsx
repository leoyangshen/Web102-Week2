// src/App.js
import React from 'react';
import Card from './Card.jsx'; // Import the Card component
import './Card.css'; // Import Card.css here too for general app layout or if vite doesn't bundle it automatically from Card.js

function App() {
  // Define your card data
  const cardsData = [
    { id: 1, front: 'What week are we in?', back: 'Week 2' },
    { id: 2, front: 'React', back: 'A JavaScript library for building user interfaces.' },
    { id: 3, front: 'Whis is the project about?', back: 'Card display' },
    { id: 4, front: 'CodePath', back: 'Amazing coding bootcamp!' },
  ];

  return (
    <div className="app-container">
      <h1>Flashcard Flipper</h1>
      <h1>A set of cards when clicked would flip to show its content</h1>
      <h1>There are currently four cards about CodePath</h1>
      <div className="cards-display">
        {cardsData.map(card => (
          <Card
            key={card.id}         // Unique key is crucial for lists
            frontContent={card.front} // Pass front content as a prop
            backContent={card.back}   // Pass back content as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default App;
