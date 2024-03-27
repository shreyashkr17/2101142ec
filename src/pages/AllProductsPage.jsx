import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import Pagination from './Pagination';
// import { fetchAllProducts } from '../api'; // Your API function to fetch products

export const filteredProducts = [
  {
    id: 1,
    name: "Product 1",
    company: "Company A",
    category: "Electronics",
    price: 99.99,
    rating: 4.5,
    discount: 10,
    availability: true,
    image: "https://example.com/image1.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    company: "Company B",
    category: "Clothing",
    price: 49.99,
    rating: 3.8,
    discount: 20,
    availability: false,
    image: "https://example.com/image2.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    company: "Company C",
    category: "Home & Kitchen",
    price: 149.99,
    rating: 4.0,
    discount: 15,
    availability: true,
    image: "https://example.com/image3.jpg"
  },
  // Add more demo products as needed
];

const AllProductsPage = () => {
  // const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [filters, setFilters] = useState({
  //   category: '',
  //   company: '',
  //   minPrice: '',
  //   maxPrice: '',
  //   minRating: '',
  //   available: false,
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchAllProducts(); // Fetch products from your API
  //     setProducts(data);
  //     setFilteredProducts(data);
  //   };

  //   fetchData();
  // }, []);

  // const applyFilters = () => {
  //   // Apply filters to products
  //   // You need to implement this function based on your filter criteria
  //   // Example: Filter by category, company, price range, rating, availability, etc.
  //   // Then update filteredProducts state
  // };

  // const handleFilterChange = (name, value) => {
  //   setFilters({ ...filters, [name]: value });
  //   applyFilters();
  // };

  

  
  
  
  return (
    <div className="container mx-auto mt-4">
     {/* <Filters filters={filters} onFilterChange={handleFilterChange} />  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <Pagination />  */}
      {/* <ProductCard product={demoProduct}></ProductCard> */}
    </div>
  );
};

export default AllProductsPage;