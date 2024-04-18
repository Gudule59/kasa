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
    <section className='listeLogement'>
      <div className="listeLogement__container">
        {data.map((Logements) => (
          <div key={Logements.id} className="listeLogement__container__item">
            <div style={{ position: "relative" }}>
              <Link to={`/logement/${Logements.id}/`}>
                <img
                  src={Logements.cover}
                  alt={Logements.title}
                  onClick={() => setSelectedId(Logements.id)} // Mettre à jour l'ID sélectionné lors du clic sur l'image
                />
              </Link>
              <div className="titre"> {Logements.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardList;