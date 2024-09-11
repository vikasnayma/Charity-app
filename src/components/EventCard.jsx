import React from 'react';

const EventCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition hover:scale-105 duration-400">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;