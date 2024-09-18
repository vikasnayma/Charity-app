// DonorDashboard.js
import React from 'react';
import EventCard from './EventCard';
import animal from '../assets/animal.png';
import celanlinesss from '../assets/celanlinesss.jpg';
import clothes from '../assets/clothes.jpg';
import education from '../assets/education.png';;
import food from '../assets/food.jpg';
import health1 from '../assets/health1.jpg';
import logo from '../assets/logo.jpg';
import aboutimg from '../assets/aboutimg.png';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';

const Dashboard = () => {
  const donor = {
    id: '12345',
    name: 'Kannur Lokesh Rahul',
    address: '123 Charity Lane, Bangluru, India',
    contact: '+123 456 7890',
    email: 'klrahul@example.com',
    donationHistory: [
      { date: '2023-06-20', amount: 100, projectName: 'Education for All', imageUrl:education  },
      { date: '2023-05-10', amount: 150, projectName: 'Healthcare Doanation', imageUrl:health1  },
      { date: '2023-04-05', amount: 250, projectName: 'Food Donation', imageUrl:food  },
      { date: '2023-06-10', amount: 200, projectName: 'Cleanliness', imageUrl:celanlinesss },
      { date: '2023-06-10', amount: 350, projectName: 'Clothes Donation', imageUrl:clothes  },
      { date: '2023-03-15', amount: 500, projectName: 'Healthcare Donation', imageUrl:health1  },
    ],
  };

  return (
    <div>
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 shadow-lg">
       <h1 className="text-4xl font-bold text-center mt-8 mb-14 text-blue-950 bg-white rounded-xl shadow-md p-4">Donor DashBoard</h1>

      {/* Donor Information */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-3xl font-semibold mb-4 text-center pb-4">Donor Information</h2>
        <div className="space-y-2">
          <p><strong>Donor ID :</strong> {donor.id}</p>
          <p><strong>Name :</strong> {donor.name}</p>
          <p><strong>Address :</strong> {donor.address}</p>
          <p><strong>Contact Number :</strong> {donor.contact}</p>
          <p><strong>Email Address :</strong> {donor.email}</p>
        </div>
      </div>

      {/* Donation History (using cards) */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center pb-4">Donation History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donor.donationHistory.map((donation, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md">
              <img
                src={donation.imageUrl}
                alt={donation.projectName}
                className="h-24 w-24 object-cover mb-4 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold text-center">{donation.projectName}</h3>
              <p className="text-center text-gray-600 mb-2"><strong>Date:</strong> {donation.date}</p>
              <p className="text-center text-gray-600 mb-2"><strong>Amount Donated:</strong> Rs {donation.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <footer className="bg-gray-100 pt-16 pb-8 px-5 pl-16 mt-4">
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
            <li><a href="#" className="hover:underline">Gallery</a></li>
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
  );
};

export default Dashboard;
