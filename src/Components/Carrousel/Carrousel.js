import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Datas/Logements.json';
import './Carrousel.scss';

function Carrousel() {
  const [images, choixImage] = useState([]); // depart du tableau vide
  const [imageAfficher, ImageAfficherMAJ] = useState(0); // depart du tableau a 0
  const { id } = useParams(); // je recupere l'id dans l'url pour ouvrir les images de l'image cliqué

  useEffect(() => {
    // Filtrer les données pour trouver le logement correspondant à l'ID dans l'URL
    const logement = data.find(logement => logement.id === id);
    if (logement) {
      choixImage(logement.pictures);
    }
  }, [id]);

  const imagePrecedende = () => {
    ImageAfficherMAJ(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const imageSuivante = () => {
    ImageAfficherMAJ(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="Carrousel">
      {images.length > 1 && (
        <>
          <button onClick={imagePrecedende}> METTRE UN PICTO ET PLACER DANS L'image </button>
          <img className='imgCarrousel' src={images[imageAfficher]} alt={`Image ${imageAfficher + 1}`} />
          <button onClick={imageSuivante}> METTRE UN PICTO ET PLACER DANS L'image </button>
          <div className="image-number"> {imageAfficher + 1} / {images.length}</div>
        </>
      )}
      {images.length === 1 && (
        <img className='imgCarrousel'  src={images[0]} alt="Image unique" />
      )}
    </div>
  );
}

export default Carrousel;