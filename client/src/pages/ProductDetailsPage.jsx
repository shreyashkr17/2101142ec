import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { filteredProducts } from './AllProductsPage';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = filteredProducts.find((e) => {
    return e.id === productId;
  });

  return (
    <div className="container mx-auto py-8">
      <div className="md:flex md:items-center md:justify-between">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">{product.name}</h1>
        <p className="text-gray-600">{product.company}</p>
      </div>
      <div className="mt-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center">
          <div className="flex items-center text-yellow-500">
            {/* Star icons for rating */}
            <span className="text-gray-600 ml-1">{product.rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-600 ml-4">{product.category}</p>
        </div>
        <p className="text-lg font-semibold text-gray-900">${product.price}</p>
      </div>
      <div className="mt-8">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="mt-8">
        <p className="text-gray-700">{product.description}</p>
      </div>
      <div className="mt-8 flex items-center">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-4">
          Back to Products
        </Link>
        {product.availability ? (
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Add to Cart
          </button>
        ) : (
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md cursor-not-allowed" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
