import React from 'react'
import bg1 from '../assets/bg1.avif';
import bg2 from '../assets/bg2.avif';
import EventCard from './EventCard';
import animal from '../assets/animal.png';
import celanlinesss from '../assets/celanlinesss.jpg';
import clothes from '../assets/clothes.jpg';
import education from '../assets/education.png';;
import food from '../assets/food.jpg';
import health1 from '../assets/health1.jpg';
import logo from '../assets/logo.jpg';
import { FaHandsHelping, FaUsers, FaDonate, FaBullhorn } from 'react-icons/fa';
function Home() {

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

    <>
    <div className='max-h-screen w-auto'>
     <section className="flex flex-col flex-wrap md:flex-row items-center justify-between bg-gray-100 rounded-md py-12 px-6 md:px-20">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left mb-6 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-950 leading-tight mb-6">
        Share your love to make someone’s life better.
        </h1>
        <p className="text-xl font-semibold text-gray-600 mb-6">
        Your generosity has the power to bring hope, support, and opportunities to those who need it most.
        </p>
        <p className="text-gray-600 mb-6">
        Join us in making a difference. Every donation, no matter the size, helps us provide food, education, and healthcare to underprivileged communities around the world. Together, we can build a brighter future and ensure that everyone has a chance to thrive.Your contributions help us to expand our reach and make a difference in the lives of thousands around the world.
        </p>
        <button className=" border border-blue-900 rounded-md text-black px-5 py-2 shadow-md hover:bg-blue-950 transition duration-300 hover:text-white">
          Login to Donate
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2">
        <img 
          src={bg2} 
          alt="Charity" 
          className="w-full  h-auto rounded-3xl shadow-md m-8"
        />
      </div>
    </section>

    <div className="w-auto py-12 bg-gray-100 my-12 px-16 rounded-md">
      <h1 className="text-4xl font-bold text-center mt-8 mb-10 text-blue-950 bg-gray-200 rounded-lg p-4">Our Charity Works</h1>
      <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <EventCard key={event.id} image={event.image} title={event.title} description={event.description} />
        ))}
      </div>
    </div>


    <div className="bg-gray-100 py-8 px-4 md:px-20 shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        
        {/* Total Campaigns */}
        <div className="flex flex-col items-center">
          <FaBullhorn className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-gray-600">Total Campaigns</p>
        </div>

        {/* Satisfied Donors */}
        <div className="flex flex-col items-center">
          <FaHandsHelping className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-3xl font-bold">1748+</h3>
          <p className="text-gray-600">Satisfied Donors</p>
        </div>

        {/* Funds Raised */}
        <div className="flex flex-col items-center">
          <FaDonate className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-3xl font-bold">50000+</h3>
          <p className="text-gray-600">Fund Raised</p>
        </div>

        {/* Happy Volunteers */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-gray-600">Happy Volunteers</p>
        </div>

      </div>
    </div>

    </div>
    </>
  )
}

export default Home
