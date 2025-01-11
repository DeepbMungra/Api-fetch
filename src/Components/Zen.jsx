
import React, { useEffect, useState } from 'react';
import './CatBreeds.css'; 
const CatBreeds = () => {
  const [breeds, setdata] = useState([]);

  useEffect(() => {
    fetch('http://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setdata(data));
  }, []);

  return (
    <div>
      <h1>Cat Breeds</h1>
      <div className="card-container">
        {ele.map(ele => (
          <div key={ele.id} className="card">
            <h3>{ele.name}</h3>
            <img
                src={ele.cfa_images ? ele.name : 'image-not-found'}
                
                className="-image"
             
              />
            <p><strong>Weight:</strong> {ele.price} lbs</p>
            <p><strong>ID:</strong> {ele.discription}</p>
            <p><strong>Origin:</strong> {ele.category}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CatBreeds;

