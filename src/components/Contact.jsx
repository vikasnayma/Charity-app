import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import community from '../assets/community.jpg'


function Contact() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How can I contact support?',
      answer: 'You can reach us via the email addresses provided or through the contact form above.',
    },
    {
      question: 'What are the working hours?',
      answer: 'Our support team is available from 9 AM to 6 PM from Monday to Friday.',
    },
    {
      question: 'How soon will I get a response?',
      answer: 'We aim to respond within 24-48 hours on business days.',
    },
    {
      question: 'Can I subscribe to newsletters?',
      answer: 'Yes, you can subscribe to our newsletter by providing your email in the newsletter section above.',
    },
  ];
  

  return (
    <div className='bg-gray-100'>

    <div className="max-w-5xl mx-auto py-8 px-6 sm:px-8 lg:py-10 lg:px-10">
    {/* Contact Form Image */}
    <div className="w-full mb-8 flex">
      <img
        src={community}
        alt="Contact Us Banner"
        className="w-[1200px] h-[300px] object-cover rounded-lg"
      />
      
    </div>

    {/* Title */}
    <div className="text-center mb-8">
      <h2 className="text-lg font-medium">Contact with us</h2>
      <p className="text-md text-blue-950 font-semibold">Get in touch with us & stay updated</p>
    </div>

    {/* Contact Info & Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Contact Info Section */}
      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-center justify-center space-x-3 p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg min-h-[130px] text-center">
          <div className="text-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 9a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-medium">Address:</h3>
            <p className="text-sm">101 Hope Street, Charityville, NY 10012
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-3 p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg min-h-[130px] text-center">
          <div className="text-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4m0 0l-4 4m4-4v12" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-medium">Email:</h3>
            <p className="text-sm">support@domain.com</p>
            <p className="text-sm">contact@domain.com</p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-center space-x-3 p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg min-h-[130px] text-center">
          <div className="text-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3-7m10 4l-3 7H9m-6 2h10l3-7m-10 2v10" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-medium">Phone Number:</h3>
            <p className="text-sm">(123) 456-7890</p>
            <p className="text-sm">(111) 222-3333</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 text-blue-950">Leave us a message</h2>
        <form>
          <div className="grid grid-cols-1 gap-4 mb-3">
            <input
              type="text"
              placeholder="Your full name"
              className="border border-gray-300 rounded-md p-2 w-full bg-red-100 text-sm"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 rounded-md p-2 w-full bg-red-100 text-sm"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-2 w-full bg-red-100 text-sm"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-md p-2 w-full h-24 bg-red-100 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-950 text-white rounded-md py-2 px-4 transition duration-200 text-sm"
          >
            Send message
          </button>
        </form>
      </div>
    </div>

    {/* Newsletter Section */}
    <div className="mt-8 bg-white shadow-lg p-4 rounded-lg text-center">
      <h2 className="text-md font-semibold">Newsletter</h2>
      <p className="text-sm text-gray-700">
        To get weekly & monthly news,{' '}
        <span className="font-semibold text-blue-950">Subscribe</span> to our newsletter.
      </p>
      <div className="mt-3 flex justify-center space-x-3">
        <input
          type="email"
          placeholder="Your mail address"
          className="border border-gray-300 rounded-md p-2 w-full max-w-md text-sm"
        />
        <button className="bg-blue-900 hover:bg-blue-950 text-white rounded-md py-2 px-4 transition duration-200 text-sm">
          Subscribe
        </button>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-10 mb-10">
      <h2 className="text-lg font-semibold text-center mb-6 text-blue-950">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div
            className="border-b border-gray-300 py-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-md font-semibold text-gray-800">
              {faq.question}
            </h3>
            <span className="text-lg font-semibold text-gray-500">
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
          {openIndex === index && (
            <div className="mt-2 text-sm text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
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
            <h2 className="text-xl text-blue-950 font-semibold">Charity</h2>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt ut labore etdolore magna aliqua.
          </p>
          <address className="mt-4 text-gray-600">
            <strong>Address:</strong> 101 Hope Street, Charityville, NY 10012<br />
            <strong>Phone:</strong> (123) 456-7890<br />
            <strong>Email:</strong> support@domain.com
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-blue-950 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
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
              <a href="#" className="text-blue-900 hover:underline">#CharityForAll</a><br />
              Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt ut labore etdolore magna aliqua.
            </p>
            <a href="#" className="text-blue-900 hover:underline">https://twitter.com/helpinghandsxyz</a>
            <p className="text-sm text-gray-500">July 18, 2024 04:20 PM</p>
          </div>
        </div>
      </div>
    </footer>


    </div>

       

    
  )
}

export default Contact

