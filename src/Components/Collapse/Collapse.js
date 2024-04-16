import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';

function Collapse({ data }) {
    const [openCollapsibleId, setOpenCollapsibleId] = useState(null);

    const toggleCollapse = (id) => {
        setOpenCollapsibleId(openCollapsibleId === id ? null : id);
    };

    return (
        <section className="Collapse">
            <div className='grid-container'>
                {data.map((item) => (
                    <div key={item.id}>
                        <h3 className='grid-item img' onClick={() => toggleCollapse(item.id)}>
                            {item.title || item.label}
                            <button type="button" className="btnCollapsecible">
                                {openCollapsibleId === item.id ? (
                                    <FontAwesomeIcon icon={faChevronUp} />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                )}
                            </button>
                        </h3>
                        {openCollapsibleId === item.id && (
                            <div className="contentBox">
                                {item.content && <p>{item.content}</p>}
                                {item.description && <p>{item.description}</p>}
                                {item.equipments && (
                                    <ul>
                                        {item.equipments.map((equipment, index) => (
                                            <li key={index}>{equipment}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Collapse;
