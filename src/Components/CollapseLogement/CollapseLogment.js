import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Datas/Logements.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CollapseLogement.scss';

function CollapseLogement() {
    const { id } = useParams();
    const [activeId, setActiveId] = useState(null);
    const [logement, setLogement] = useState(null);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);

    useEffect(() => {
        setActiveId(id);
        const selectedLogement = data.find(logement => logement.id === id);
        setLogement(selectedLogement);
    }, [id]);

    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    const toggleEquipment = () => {
        setIsEquipmentOpen(!isEquipmentOpen);
    };

    return (
        <section className="CollapseLogement">
            <div className='grid-container2'>
                {logement && (
                    <>
                    <div>
                        <h3 className='grid-item2 img' onClick={toggleDescription}>
                            Description
                            <button type="button" className="btnCollapsecible">
                                {isDescriptionOpen ? (
                                    <FontAwesomeIcon icon={faChevronUp} />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                )}
                            </button>
                        </h3>
                        {isDescriptionOpen && (
                            <div className="contentBox">
                                {logement.description}
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className='grid-item2' onClick={toggleEquipment}>
                        Équipement
                        <button type="button" className="btnCollapsecible">
                            {isEquipmentOpen ? (
                                <FontAwesomeIcon icon={faChevronUp} />
                            ) : (
                                <FontAwesomeIcon icon={faChevronDown} />
                            )}
                        </button>
                    </h3>
                    {isEquipmentOpen && (
                        <div className="contentBox">
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                  </div>  </>
                )}
            </div>
        </section>
    );
}

export default CollapseLogement;
