import React, { createContext, useState } from 'react';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from'../../assets/gallery5.jpg';
import health1 from'../../assets/health1.jpg';

// Create the context
const CardContext = createContext();

// Context Provider component
const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([
    { id: 1, image: gallery1 , description: 'Our Charity Work' },
    { id: 2, image: gallery2, description: 'Our Charity Work' },
    { id: 3, image: gallery3, description: 'Our Charity Work' },
    { id: 4, image: gallery4, description: 'Our Charity Work' },
    { id: 5, image: gallery5, description: 'Our Charity Work' },
    { id: 6, image: health1, description: 'Our Charity Work' }
  ]);

  // Add a card
  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, id: Date.now() }]);
  };

  // Update a card
  const updateCard = (updatedCard) => {
    setCards(cards.map(card => card.id === updatedCard.id ? updatedCard : card));
  };

  // Delete a card
  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <CardContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
