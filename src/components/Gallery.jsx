import React from 'react'
import logo from '../assets/logo.jpg';
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
      <footer className="bg-gray-100 pt-16 pb-8 px-5 pl-16">
      <div className="w-auto mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} className="h-12 mr-3" />
            <h2 className="text-xl text-blue-950 font-semibold">Charity</h2>
          </div>
          <address className="mt-4 text-gray-600">
            <strong>Address:</strong> 123 , near xyz , 462003 , Bhopal<br />
            <strong>Phone:</strong> +011 234-567-890<br />
            <strong>Email:</strong> charity@gmail.com
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-blue-950 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg text-blue-950 font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">Help & FAQ</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Latest Tweets */}
        <div>
          <h3 className="text-lg  text-blue-950 font-semibold mb-4">Connect with Us</h3>
          <div className="text-gray-600">
              <a href="#" className="text-blue-900 hover:underline">Twitter</a><br />
            <a href="#" className="text-blue-900 hover:underline">Instagram</a><br/>
            <a href="#" className="text-blue-900 hover:underline">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Gallery

