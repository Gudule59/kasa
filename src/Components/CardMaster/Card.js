import React from 'react';
import './Card.scss';
import { NavLink } from 'react-router-dom';

function Card({ imageSource, title }) {
    return (
        <section style={{ position: 'relative' }}>
            <img className='lmj-accueil' src={imageSource} alt="Image d'accueil" />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#ffffff',
                }}
            >
                <h2>{title}</h2>
            </div>
        </section>
    );
}

export default Card;