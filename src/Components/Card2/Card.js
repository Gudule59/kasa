import Imageaccueil from '../Assets/ImageSource2.png';
import './Card.scss';
import { NavLink } from 'react-router-dom';


function Card() {
	

    return (
        <section style={{ position: 'relative'}}>
          <img className='lmj-accueil' src={Imageaccueil} alt="Image d'accueil" 
            />
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
            
          </div>
        </section>
      );
    };



export default Card