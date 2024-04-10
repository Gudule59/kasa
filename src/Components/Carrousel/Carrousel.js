import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carrousel.scss';
import data from '../../Datas/Logements.json';

function Carrousel() {
  const [images, choixImage] = useState([]);
  const [imageAfficher, ImageAfficherMAJ] = useState(0);
  const { id } = useParams();

  useEffect(() => {
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
          <button className="arrow left" onClick={imagePrecedende}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <img className='imgCarrousel' src={images[imageAfficher]} alt={`Image ${imageAfficher + 1}`} />
          <button className="arrow right" onClick={imageSuivante}><FontAwesomeIcon icon={faChevronRight} /></button>
          <div className="image-number"> {imageAfficher + 1} / {images.length}</div>
        </>
      )}
      {images.length === 1 && (
        <img className='imgCarrousel' src={images[0]} alt="Image unique" />
      )}
    </div>
  );
}

export default Carrousel;
