import React from 'react';
import './Card.scss';


function Card({ imageSource, title }) {
    return (
        <article className='image-banner'>
            <img className='image' src={imageSource} alt="Image d'accueil" />
            <div className='titre'>
                <h2>{title}</h2>
            </div>
        </article>
    );
}

export default Card;