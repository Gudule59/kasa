import React from 'react';
import { useParams } from 'react-router-dom';
import './Tags.scss';
import data from '../../Datas/Logements.json';

function Tags() {
  const { id } = useParams();
  const logement = data.find(logement => logement.id === id);

  return (
    <div className="tags-container">
      {logement.tags.map((tag, index) => (
        <div key={index} className="tag">{tag}</div>
      ))}
    </div>
  );
}

export default Tags;


