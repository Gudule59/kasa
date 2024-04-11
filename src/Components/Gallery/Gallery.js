import React from 'react';
import { useParams, Link  } from 'react-router-dom'; // Importez useParams depuis react-router-dom
import './Gallery.scss';
import data from '../../Datas/Logements.json';
import PageErreurconfig from '../PageErreur/PageErreur.js'
import CollapseLogement from '../CollapseLogement/CollapseLogment.js';
import Carrousel from'../Carrousel/Carrousel.js';
import Etoile from '../Etoile/Etoile.js';

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
    <section className='logementMain'>
      <article >
        <Carrousel />
            </article>
            <article className='logementArticle'>
            
            <div>
      <h2 className='logementTitre'>{logement.title}</h2>
      <p>{logement.location}</p>
      <p>{logement.tags}</p>
      </div> 
      
      <div>
      <div className='host'>
        <p className='logementName'>{logement.host.name}</p>
        <img className='imgHost' src={logement.host.picture}  alt={logement.host.name} />
        </div>
        <Etoile />
        </div>
           
          
            </article >
            
        
            <article >
      <div ><CollapseLogement /></div>
     
      </article >
    </section>
  );
}

export default Gallery;





