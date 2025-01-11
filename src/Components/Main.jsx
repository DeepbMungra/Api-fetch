// import React, { useEffect } from 'react';

// const FetchData = () => {
//   useEffect(() => {
//     // URL to fetch data from
//     const url = 'https://api.thecatapi.com/v1/breeds';

//     // Fetch data from the URL
//     fetch(url)
//       .then(response => {
//         // Ensure the response is in JSON format
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Log the fetched data to the console
//         console.log('Fetched data:', data);
//       })
//       .catch(error => {
//         // Log any error that occurs during fetch
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []); // Empty dependency array to run effect only once

//   return (
//     <div>
//       <h1>Simple URL Fetch in React</h1>
//       <p>Check the console for fetched data.</p>
//     </div>
//   );
// };

// export default FetchData;


// import React, { useEffect, useState } from 'react';

// const CatBreeds = () => {
//   const [breeds, setBreeds] = useState([]);

//   useEffect(() => {
//     fetch('https://api.thecatapi.com/v1/breeds')
//       .then(response => response.json())
//       .then(data => setBreeds(data));
//   }, []);

//   return (
//     <div>
//       <h1>Cat Breeds</h1>
//       <ul>
//         {breeds.map(breed => (
//           <li key={breed.id}>  
//           "weight is "-{breed.weight.imperial} <br></br>
//           "id is "-{breed.id} <br></br>
//           "name is "- {breed.name} <br></br>
//           "origin countery "-{breed.origin} <br></br>
//           "temperament are "-{breed.temperament} <br></br>
        
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CatBreeds;

import React, { useEffect, useState } from 'react';
import './CatBreeds.css'; 
const CatBreeds = () => {
  const [breeds, setBreeds] = useState([]);
 
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => setBreeds(data));
  }, []);

  return (
    <div>
      <h1 className='headd container-fluid'>  Cat Breeds  </h1>
      <div className="card-container">
        {breeds.map(breed => (
          <div key={breed.id} className="card">
            <h3>{breed.name}</h3>
            <img
                   src={breed.image?.url ||'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/18757075-68b9-4474-ae9c-79c61ebdc227/4b510fc3-fe80-42c0-8349-73c44d66e575.png'}
                   alt={breed.name}
                   className="breed-image"
              />
            <p><strong>Weight:</strong> {breed.weight.imperial} lbs</p>
            <p><strong>ID:</strong> {breed.id}</p>
            <p><strong>Origin:</strong> {breed.origin}</p>
            <p><strong>Temperament:</strong> {breed.temperament}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatBreeds;

