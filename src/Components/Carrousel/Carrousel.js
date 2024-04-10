import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Datas/Logements.json';
import './Carrousel.scss';

function Carrousel() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    // Filtrer les données pour trouver le logement correspondant à l'ID dans l'URL
    const logement = data.find(logement => logement.id === id);
    if (logement) {
      setImages(logement.pictures);
    }
  }, [id]);

  const imagePrecedende = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const imageSuivante = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="Carrousel">
      {images.length > 1 && (
        <>
          <button onClick={imagePrecedende}> METTRE UN PICTO ET PLACER DANS L'image </button>
          <img className='imgCarrousel' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          <button onClick={imageSuivante}> METTRE UN PICTO ET PLACER DANS L'image </button>
          <div className="image-number"> {currentImageIndex + 1} / {images.length}</div>
        </>
      )}
      {images.length === 1 && (
        <img className='imgCarrousel'  src={images[0]} alt="Image unique" />
      )}
    </div>
  );
}

export default Carrousel;