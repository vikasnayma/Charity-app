import React from 'react'
import { useContext, useState } from 'react';
import { CardContext } from '../components/GalleryContext/CardContext';

function Gallery() {

  const { cards } = useContext(CardContext);
  const [newCard, setNewCard] = useState({ image: '', description: '' });
  
  return (
    <div>
      <div className='text-center m-12'>
      <h2 className="text-5xl font-bold text-blue-950 mb-4">Welcome to Our Charity</h2>
            <p className="text-xl font-semibold text-gray-600 mb-4">
            A world where poverty
            will not exists.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our charity organization is committed to transforming lives by running impactful projects that address key areas like education, healthcare, and sustainable development. We work with communities to offer meaningful support and opportunities, ensuring every donation is used to bring real change.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Join us in creating a positive impact. Your contributions help us to expand our reach and make a difference in the lives of thousands around the world.
            </p>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 m-12">
        {cards.map((card) => (
          <div key={card.id} className="border rounded-3xl shadow-lg p-4">
            <img src={card.image} alt="card" className="h-50 w-94 object-cover rounded-xl mb-2" />
            <p className="text-lg m-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

