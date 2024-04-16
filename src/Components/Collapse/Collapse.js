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
        <div className="grid-container3 ">
            <h3 className="grid-item2" onClick={toggleCollapse}>
                {title}
                <button type="button" className="btnCollapsecible">
                    {isOpen ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                    )}
                </button>
            </h3>
            {isOpen && (
                <div className="contentBox">
                    {content}
                </div>
            )}
        </div>
         </div>
    );
}

export default Collapse;
