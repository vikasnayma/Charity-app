import React, { useContext, useState } from 'react';
import { CardContext } from '../components/GalleryContext/CardContext';

const Gallery = () => {
  const { cards, addCard, updateCard, deleteCard } = useContext(CardContext);
  const [newCard, setNewCard] = useState({ image: '', description: '' });

  // Handler to add a new card
  const handleAddCard = () => {
    if (newCard.image && newCard.description) {
      addCard(newCard);
      setNewCard({ image: '', description: '' });
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      {/* Add Card Section */}
      <div className="flex flex-col space-y-3 mb-6">
        <input
          type="text"
          placeholder="Image URL"
          value={newCard.image}
          onChange={(e) => setNewCard({ ...newCard, image: e.target.value })}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newCard.description}
          onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
          className="border rounded p-2"
        />
        <button onClick={handleAddCard} className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
          Add Card
        </button>
      </div>

      {/* Cards Display Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="border rounded-lg shadow-lg p-4">
            <img src={card.image} alt="card" className="h-40 w-full object-cover rounded-t-lg mb-2" />
            <p className="text-lg mb-2">{card.description}</p>
            <div className="flex justify-between">
              <button
                onClick={() => updateCard({ ...card, description: prompt('Update description:', card.description) })}
                className="text-sm bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCard(card.id)}
                className="text-sm bg-red-500 text-white p-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
