import React from "react";

const Card = ({
  title,
  description,
  image,
  buttonText,
  onButtonClick,
  channel,
}) => {
  console.log("props:", { title, description, image, buttonText, channel });
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-700 via-purple-500 to-purple-400 text-white hover:scale-105 transform transition-transform duration-300">
      {image && (
        <img
          className="w-full h-48 object-cover rounded-t-2xl"
          src={image}
          alt="Card Image"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-100 mb-4">{description}</p>
        <button
          onClick={onButtonClick}
          className="w-full bg-white text-purple-700 py-2 px-4 rounded-xl font-semibold hover:bg-purple-100 transition-colors duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
