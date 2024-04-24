import React from 'react';
import { useParams, Link  } from 'react-router-dom'; // Importez useParams depuis react-router-dom
import './Gallery.scss';
import data from '../../Datas/Logements.json';
import PageErreurconfig from '../PageErreur/PageErreur.js'
import Collapse from '../Collapse/Collapse.js';
import Carrousel from'../Carrousel/Carrousel.js';
import Etoile from '../Etoile/Etoile.js';
import Tags  from '../Tags/Tags.js';


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
    <section className='logement__Main'>
      <article >
        <Carrousel />
            </article>
            <article className='logement__Article'>
            
            <div>
      <h2 className='logement__Titre'>{logement.title}</h2>
      <p>{logement.location}</p>
      <div><Tags /></div>
      </div> 
      
      <div className='bloc__host'>
      <div className='host'>
        <p className='host__logement__Name'>{logement.host.name}</p>
        <img className='img__Host' src={logement.host.picture}  alt={logement.host.name} />
        </div>
        <Etoile />
        </div>
           
          
            </article >
            
        
            <article >
            <div className='logement__Collapse'>
            <div className='collapse'>
                    <Collapse title="Description" content={<p>{logement.description}</p>} />
                    </div>
                    <div className='collapse'>
                      
                    <Collapse title="Équipements" content={<ul>{logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} />
                </div>
                </div>
     
      </article >
    </section>
  );
}

export default Gallery;





