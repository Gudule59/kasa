import React, { useState } from 'react';
import data from '../../Datas/AboutList.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';

function Collapse(id) {
    const [openCollapsibleId, setOpenCollapsibleId] = useState(null);

  const toggleCollapse = (id) => {
    setOpenCollapsibleId(id === openCollapsibleId ? null : id);
  };

  return (
    <>
    <section className="Collapse">
      <div className='grid-container2'>
        {data.map((AboutList) => (
          <div key={AboutList.id}>
            <h1 className='grid-item2 img' onClick={() => toggleCollapse(AboutList.id)}>
              {AboutList.title} 
              <button type="button" className="collapsecible">
              {openCollapsibleId === AboutList.id ? (
                  <FontAwesomeIcon icon={faChevronUp} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} size="lg" />
                )}
              </button>
            </h1>
            {openCollapsibleId === AboutList.id && (
              <div className="content-box">
                {AboutList.content}
              </div>
            )}
          </div>
        ))}
      </div>
      </section>
    </>
  );
}

export default Collapse;