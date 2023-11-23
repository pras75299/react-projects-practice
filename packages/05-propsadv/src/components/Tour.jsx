import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
const Tour = (props) => {
  const { id, name, info, image, price, removeTour } = props;
  const [readmore, setReadmore] = useState(false);
  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/150";
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <span
        className="deleteIcon"
        onClick={() => removeTour(id)}
        title={`Delete ${name}`}
      >
        <MdDelete />
      </span>

      <img
        className="w-full"
        src={image}
        alt={name}
        onError={handleImageError}
      />
      <div className="px-6 py-4 text-left">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Description: </span>
          {readmore ? info : `${info.substring(0, 200)}... `}
          <button
            className="d-block text-blue-600"
            onClick={() => setReadmore(!readmore)}
          >
            {readmore ? "Show less" : "Read more"}
          </button>
        </p>
        <p className="text-gray-700 text-base mt-2">
          <span className="font-bold">Price:</span> {price}
        </p>
      </div>
    </div>
  );
};

export default Tour;
