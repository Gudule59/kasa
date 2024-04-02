
import './CardList.scss';
import data from '../../Datas/Logements.json';
import { NavLink } from 'react-router-dom';


function CardList() {
	

    return (
      <section>
      <div className='lmj-CardList' class="grid-container">
        {data.map((Logements) => (
          <div key={Logements.id} className="grid-item">
            <div style={{ position: "relative" }}>
              <img src={Logements.cover} alt={Logements.title} />
              <div className="image-title" style={{ position: "absolute", bottom: "1%", left: "1%", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "5px", fontSize: "12px" }}>{Logements.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
      );
    };



export default CardList