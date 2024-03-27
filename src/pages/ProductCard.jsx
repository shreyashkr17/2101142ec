import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        <div className="relative overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-cover object-center rounded-t-lg"
          />
          {product.discount > 0 && (
            <span className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-white rounded-md">
              {product.discount}% OFF
            </span>
          )}
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">{product.company}</p>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-xl font-semibold text-gray-900">${product.price}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 flex items-center">
              {[...Array(Math.round(product.rating))].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 fill-current text-yellow-500"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3.06l1.776 3.627 4.034.586-2.91 2.841.688 4.014L10 13.988l-3.587 1.133.688-4.014-2.91-2.841 4.034-.586L10 3.06z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="text-gray-600">{product.rating.toFixed(1)}</span>
            </span>
          </div>
          <p className={product.availability ? "text-green-600" : "text-red-600"}>
            {product.availability ? "Available" : "Out of stock"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
