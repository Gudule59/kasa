import React, { useState } from 'react';
import './CardList.scss';
import data from '../../Datas/Logements.json';
import { Link } from 'react-router-dom';


function CardList() {

    // Définir l'état local pour conserver l'ID sélectionné
    const [selectedId, setSelectedId] = useState(null);

    // Fonction pour mettre à jour l'ID sélectionné lors du clic sur une image
    const handleImageClick = (id) => {
      setSelectedId(id);
    };

  return (
    <section>
      <div className='lmj-CardList' className="grid-container">
        {data.map((Logements) => (
          <div key={Logements.id} className="grid-item">
            <div style={{ position: "relative" }}>
              {/* Utiliser Link pour naviguer vers la page du logement avec l'ID correspondant */}
              <Link to={`/logement/${Logements.id}/`}>
  <img 
    src={Logements.cover} 
    alt={Logements.title} 
    onClick={() => setSelectedId(Logements.id)} // Mettre à jour l'ID sélectionné lors du clic sur l'image
  />
</Link>
              <div className="image-title" style={{ position: "absolute", bottom: "1%", left: "1%", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "5px", fontSize: "12px" }}>{Logements.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardList;