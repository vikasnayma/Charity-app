import React from "react";

const Wishlist = ({ wishlist }) => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist yet!</p>
      ) : (
        <ul className="list-none">
          {wishlist.map((item, index) => (
            <li key={index} className="mb-2 p-2 bg-gray-100 rounded shadow">
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
