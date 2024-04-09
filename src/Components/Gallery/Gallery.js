import React from 'react';
import { useParams, Link  } from 'react-router-dom'; // Importez useParams depuis react-router-dom
import './Gallery.scss';
import data from '../../Datas/Logements.json';
import PageErreurconfig from '../PageErreur/PageErreur.js'

function Gallery() {
  // Récupérer l'ID de l'URL
  const { id } = useParams();

  // Trouver le logement correspondant à l'ID dans les données
  const logement = data.find(logement => logement.id === id);

  if (!logement) {
    return  <PageErreurconfig />
  }

  // Afficher les détails du logement
  return (
    <div>
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
      {/* Afficher d'autres détails du logement */}
    </div>
  );
}

export default Gallery;
