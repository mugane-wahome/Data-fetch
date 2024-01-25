import { useState, useEffect } from 'react';
import './App.css';
const Fetch = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((photos) => {
        setPhotos(photos);
      });
  }, []);

  return (
    <div>
      {photos.splice(0, 20).map((photo, index) => {
        if (index % 5 === 0) {
          return (
            <div key={index} className="row"> 
              {photos.slice(index, index + 5).map((photo) => (
                <div key={photo.id} className="col-md-2"> 
                  <img src={photo.url} alt={photo.title} width={100} />
                  <p>{photo.title}</p>
                </div>
              ))}
            </div>
          );
        } else {
          return null; // 
        }
      })}
    </div>
  );
};

export default Fetch;
