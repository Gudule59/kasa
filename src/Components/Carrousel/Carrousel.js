import React, { useState } from 'react';
import './Carrousel.scss';
import data from '../../Datas/Logements.json';

function Carrousel () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === data.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className="Carrousel">
      {data.length > 1 && (
        <>
          <button onClick={goToPreviousImage}>Image précédente</button>
          <img src={data[currentImageIndex].cover} alt={data[currentImageIndex].title} />
          <button onClick={goToNextImage}>Image suivante</button>
          <div className="image-number">Image {currentImageIndex + 1} sur {data.length}</div>
        </>
      )}
      {data.length === 1 && (
        <img src={data[0].cover} alt={data[0].title} />
      )}
    </div>
  );
}

export default Carrousel;
