import React from 'react'
import aboutimg from '../assets/aboutimg.png';
import EventCard from './EventCard';
import animal from '../assets/animal.png';
import celanlinesss from '../assets/celanlinesss.jpg';
import clothes from '../assets/clothes.jpg';
import education from '../assets/education.png';;
import food from '../assets/food.jpg';
import health1 from '../assets/health1.jpg';
import logo from '../assets/logo.jpg';

const About = () => {

  const events = [
    {
      id: 1,
      image: food,
      title: 'Food Drive',
      description: 'Help us collect and distribute food to those in need.',
    },
    {
      id: 2,
      image: clothes,
      title: 'Clothes Donation',
      description: 'Donate clothes to help families in need stay warm.',
    },
    {
      id: 3,
      image: celanlinesss,
      title: 'Cleanliness',
      description: 'Attend our gala to raise funds for various causes.',
    },
    {
      id: 4,
      image: animal,
      title: 'Animal shelter',
      description: 'Donate and help us to shleter animal and provide them food',
    },
    {
      id: 5,
      image: education,
      title: 'Education',
      description: 'Donate and help in make the poor and unable children educated.',
    },
    {
      id: 6,
      image: health1,
      title: 'Donate for Health',
      description: 'Donate and help poor and unable struggling with deseases',
    },
  ];

  return (
    <div className="w-full h-screen flex flex-wrap items-center justify-center">

      {/* ABOUT SECTION */}

      <div className="w-auto h-full flex flex-col flex-wrap md:flex-row">
        {/* About Description Section */}
        <div className="flex-1 p-8 flex items-center justify-center bg-gray-100">
          <div className="text-left">
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
        </div>

        {/* Image Section */}
        <div className="flex-1 p-16 flex items-center justify-center bg-gray-100">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={aboutimg} // Replace with an actual charity work image
            alt="Charity Work"
          />
        </div>
      </div>

      {/* EVENT CARDS COMPONENT */}

      <div className="w-full py-12 bg-gray-100 px-16 rounded-md">
      <h1 className="text-4xl font-bold text-center mt-8 mb-10 text-blue-950 bg-gray-200 rounded-lg p-4">Our Charity Works</h1>
      <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <EventCard key={event.id} image={event.image} title={event.title} description={event.description} />
        ))}
      </div>
    </div>

    {/* FOOTER SECTION */}

      <footer className="bg-gray-100 pt-16 pb-8 px-5">
      <div className="w-auto mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} className="h-12 mr-3" />
            <h2 className="text-xl text-blue-950 font-semibold">Jago welfare</h2>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt ut labore etdolore magna aliqua.
          </p>
          <address className="mt-4 text-gray-600">
            <strong>Address:</strong> 858 Walnutwood Ave. Webster, NY 14580<br />
            <strong>Phone:</strong> +011 234-567-890<br />
            <strong>Email:</strong> info@example.com
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
            <li><a href="#" className="hover:underline">Career</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg text-blue-950 font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">Help & FAQ</a></li>
            <li><a href="#" className="hover:underline">Causes</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Latest Tweets */}
        <div>
          <h3 className="text-lg  text-blue-950 font-semibold mb-4">Latest Tweets</h3>
          <div className="text-gray-600 space-y-4">
            <p>
              <a href="#" className="text-blue-900 hover:underline">#digitalmarketing</a><br />
              Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt ut labore etdolore magna aliqua.
            </p>
            <a href="#" className="text-blue-900 hover:underline">twitter.com/i/#puredrinkingwater</a>
            <p className="text-sm text-gray-500">December 13, 2021 04:20 PM</p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default About;

