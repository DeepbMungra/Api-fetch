import React, { useEffect, useState } from 'react';
import './CatBreeds.css';

const CatBreeds = () => {
  const [breeds, setData] = useState([]); // Changed to setData for consistency

  useEffect(() => {
    fetch('http://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setData(data.products)); // Access products inside the data
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="card-container">
        {breeds.map(product => (
          <div key={product.id} className="card">
            <h3>{product.title}</h3>
            <img
              src={product.images[0]} // Access the first image in the images array
              alt={product.title}
              className="product-images"
            />
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <button className='buttons'>Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatBreeds;
