import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Datas/Logements.json'; // Importer les données des logements
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Icône solide de l'étoile
import './Etoile.scss'; // Importer le fichier de style CSS

function Etoile() {
  const { id } = useParams();
  const logement = data.find(logement => logement.id === id);

  // Générer les étoiles en fonction de logement.rating
  const etoiles = [];
  for (let i = 0; i < 5; i++) {
    etoiles.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={i < logement.rating ? 'etoile-active' : 'etoile-inactive'} // Appliquer une classe en fonction de logement.rating
      />
    );
  }

  return (
    <div className='etoile'>
      {etoiles}
    </div>
  );
}

export default Etoile;
