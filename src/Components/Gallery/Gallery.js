import React from 'react';
import { useParams, Link  } from 'react-router-dom'; // Importez useParams depuis react-router-dom
import './Gallery.scss';
import data from '../../Datas/Logements.json';
import PageErreurconfig from '../PageErreur/PageErreur.js'
import CollapseLogement from '../CollapseLogement/CollapseLogment.js';

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
        <img src={logement.cover}  alt={logement.title}      style={{
              width: '1240px',
              height: '430px',
              
            }}/>
      <h2>{logement.title}</h2>
      <p>{logement.tags}</p>
      <p>{logement.rating}</p>
      <p>{logement.location}</p>
      <p>{logement.host.name}</p>
            <img src={logement.host.picture}  alt={logement.host.name} />
      <div ><CollapseLogement /></div>
      {/* Afficher d'autres détails du logement */}
    </div>
  );
}

export default Gallery;





