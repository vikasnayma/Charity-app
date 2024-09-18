import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUtensils, faBriefcaseMedical, faPaw, faBroom, faTshirt } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ setCurrentPage }) => {
  const cardData = [
    {
      title: "Children Education",
      description: "Empower young minds through education",
      link: "education-donation",
      bgColor: "bg-blue-100",
      icon: faGraduationCap,
    },
    {
      title: "Food Donation",
      description: "Help feed the hungry and bring hope",
      link: "food-donation",
      bgColor: "bg-orange-100",
      icon: faUtensils,
    },
    {
      title: "Health Support",
      description: "Support medical care for those in need",
      link: "treatment-donation",
      bgColor: "bg-teal-100",
      icon: faBriefcaseMedical,
    },
    {
      title: "Animal Shelter",
      description: "Provide a safe haven for furry friends",
      link: "animal-donation",
      bgColor: "bg-green-100",
      icon: faPaw,
    },
    {
      title: "Cleanliness",
      description: "Contribute to a cleaner, healthier environment",
      link: "cleanliness-donation",
      bgColor: "bg-yellow-100",
      icon: faBroom,
    },
    {
      title: "Clothes Donation",
      description: "Donate warm clothing for those in need",
      link: "clothes-donation",
      bgColor: "bg-pink-100",
      icon: faTshirt,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`w-60 p-6 rounded-lg shadow-lg ${card.bgColor} text-center relative`}
          onClick={() => setCurrentPage(card.link)}
        >
          <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center mx-auto mb-4">
            <FontAwesomeIcon icon={card.icon} className="text-3xl text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-500 mb-4">{card.description}</p>
          <a className="text-blue-500 font-bold" href="#" onClick={(e) => e.preventDefault()}>
            Explore
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
