import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Collapse'>
            <div className={`Collapse__container ${isOpen ? 'open' : ''}`}>
                <h3 className={`Collapse__container__item ${isOpen ? 'active' : ''}`} onClick={toggleCollapse}>
                    {title}
                    <button type="button" className="btnCollapsecible">
                        {isOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </button>
                </h3>
                <div className={`contentBox ${isOpen ? 'fade-in' : ''}`}>
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Collapse;
