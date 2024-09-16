import React, { useState } from "react";
import CardComponent from "./CardComponent";
import SubComponent from "./SubCard";
import Wishlist from "./Wishlist";
import logo from '../assets/logo.jpg';
import contact from '../assets/contact.jpg'

function Projects() {
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const animalOptions = [
      { 
        title: "Shelter Supplies", 
        price: "$50", 
        description: "Provide essential supplies like bedding, toys, and cleaning products for shelter animals.",
        image: "https://media.4-paws.org/6/8/9/3/689354d6694789b45569cd647a6009e240b4afe7/VIER%20PFOTEN_2016-09-18_081-1927x1333-1920x1328.jpg" 
      },
      { 
        title: "Animal Medical Care", 
        price: "$100", 
        description: "Cover medical costs, including vaccinations and surgeries for shelter animals.",
        image: "https://tse4.mm.bing.net/th?id=OIP.hJPnUIe0l0vpDJ4CR1FMkAHaFj&pid=Api&P=0&h=180" 
      },
      { 
        title: "Sponsor a Pet", 
        price: "$150", 
        description: "Sponsor the stay of a pet in the shelter until they find a permanent home.",
        image: "https://tse2.mm.bing.net/th?id=OIP.xNxK8zOycmEY-h1RWxbq8QHaE7&pid=Api&P=0&h=180" 
      }
    ];
    
    // Food Donation Options
    const foodOptions = [
      { 
        title: "1-Time Meal", 
        price: "$20", 
        description: "Provide a one-time nutritious meal to a person in need.",
        image: "https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/115000/115153/image/5d35baafa2676.jpeg" 
      },
      { 
        title: "Birthday Celebration", 
        price: "$25", 
        description: "Help someone celebrate their birthday with a special meal.",
        image: "https://images.unsplash.com/photo-1607482369189-a53b6e71fa48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      },
      { 
        title: "Whole Day Meal", 
        price: "$50", 
        description: "Sponsor a whole day's worth of meals for a person in need.",
        image: "https://cdn.givind.org/static/images/program/w450/feed-nutritious-meals-to-a-poor-rural-child.jpg" 
      }
    ];
    
    // Education Donation Options
    const educationOptions = [
      { 
        title: "1-Year Books and Notes", 
        price: "$500", 
        description: "Sponsor all necessary books and notes for a student for one year.",
        image: "https://tse2.mm.bing.net/th?id=OIP.el1CO8IeRT0nSKKSJcDX1wHaE8&pid=Api&P=0&h=180" 
      },
      { 
        title: "School Uniform", 
        price: "$30", 
        description: "Provide a student with a school uniform for the year.",
        image: "https://tse3.mm.bing.net/th?id=OIP.RViyjH6fbJXnLQEVe0ly-wHaEx&pid=Api&P=0&h=180" 
      },
      { 
        title: "Institute Fees", 
        price: "$1000", 
        description: "Cover the cost of school fees for a student in need.",
        image: "https://tse4.mm.bing.net/th?id=OIP.Ty9ULaYXT9CcYt-VJFVgZwHaE7&pid=Api&P=0&h=180" 
      }
    ];
    
    // Medical Treatment Donation Options
    const treatmentOptions = [
      { 
        title: "Basic Health Checkup", 
        price: "$75", 
        description: "Provide a basic health checkup for one individual.",
        image: "https://tse4.mm.bing.net/th?id=OIP.GnUJGPr8JzL-xrJlawAWAwHaGU&pid=Api&P=0&h=180" 
      },
      { 
        title: "Surgery Support", 
        price: "$1000", 
        description: "Help cover the costs for critical surgeries and medical procedures.",
        image: "https://tse2.mm.bing.net/th?id=OIP.xuFqc0EHFRizyVcki9ikDAHaEZ&pid=Api&P=0&h=180" 
      },
      { 
        title: "Post-Surgery Care", 
        price: "$200", 
        description: "Support individuals with their recovery by providing post-surgery care.",
        image: "https://tse3.mm.bing.net/th?id=OIP.QOxitbWsUIFmvLQP_YvadAHaE7&pid=Api&P=0&h=180" 
      }
    ];
    
    // Clothes Donation Options
    const clothesOptions = [
      { 
        title: "Winter Clothing Set", 
        price: "$75", 
        description: "Provide a full set of winter clothes including a coat, gloves, and hat for those in need.",
        image: "https://tse2.mm.bing.net/th?id=OIP.czO-3GFKIvanSBZCE8A2XgHaE6&pid=Api&P=0&h=180" 
      },
      { 
        title: "School Uniform", 
        price: "$30", 
        description: "Provide a school uniform for a child in need.",
        image: "https://tse3.mm.bing.net/th?id=OIP.RViyjH6fbJXnLQEVe0ly-wHaEx&pid=Api&P=0&h=180" 
      },
      { 
        title: "Everyday Essentials", 
        price: "$50", 
        description: "Provide essential everyday clothing items like shirts, pants, and socks.",
        image: "https://tse4.mm.bing.net/th?id=OIP.7ypBmeIIbs3PTRchWnmyjQHaE8&pid=Api&P=0&h=180" 
      }
    ];
    
    // Cleanliness Donation Options
    const cleanlinessOptions = [
      { 
        title: "Personal Hygiene Kit", 
        price: "$15", 
        description: "Provide hygiene essentials like soap, toothbrush, and toothpaste.",
        image: "https://tse1.mm.bing.net/th?id=OIP.ji2PhtvaLKuKY8lJG8efywHaHa&pid=Api&P=0&h=180" 
      },
      { 
        title: "Community Cleaning Supplies", 
        price: "$50", 
        description: "Provide cleaning supplies for maintaining public spaces and community areas.",
        image: "https://tse1.mm.bing.net/th?id=OIP.OIaTi3_JyvqQoEroMYcqXAHaE7&pid=Api&P=0&h=180" 
      },
      { 
        title: "Water Purification Tablets", 
        price: "$20", 
        description: "Help provide clean drinking water by donating water purification tablets.",
        image: "https://n1.sdlcdn.com/imgs/g/q/5/EF-Chlor-Water-Purification-Tablets-SDL762646751-3-860c8.jpg" 
      }
    ];

  const renderPage = () => {
    switch (currentPage) {
      case "education-donation":
        return (
          <SubComponent
            title="Education Donation"
            donationOptions={educationOptions}
            addToWishlist={addToWishlist}
          />
        );
      case "food-donation":
        return (
          <SubComponent
            title="Food Donation"
            donationOptions={foodOptions}
            addToWishlist={addToWishlist}
          />
        );
      case "animal-donation":
        return (
          <SubComponent
            title="Animal Shelter"
            donationOptions={animalOptions}
            addToWishlist={addToWishlist}
          />
        );
      case "treatment-donation":
        return (
          <SubComponent
            title="Surgery & Treatment"
            donationOptions={treatmentOptions}
            addToWishlist={addToWishlist}
          />
        );
      case "cleanliness-donation":
        return (
          <SubComponent
            title="Cleanliness"
            donationOptions={cleanlinessOptions}
            addToWishlist={addToWishlist}
          />
        );
      case "clothes-donation":
        return (
          <SubComponent
            title="Clothes"
            donationOptions={clothesOptions}
            addToWishlist={addToWishlist}
          />
        );
      case "wishlist":
        return <Wishlist wishlist={wishlist} />;
      default:
        return <CardComponent setCurrentPage={setCurrentPage} />;
    }
  };

  return <div>
    <div className="my-12">
    {renderPage()}
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
  </div>;
}

export default Projects;



