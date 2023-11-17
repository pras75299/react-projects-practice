import React from "react";

const Card = (props) => {
  const { name, image, age } = props;
  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/150";
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image}
        alt={name}
        onError={handleImageError}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Age: {age}</p>
      </div>
    </div>
  );
};

export default Card;
