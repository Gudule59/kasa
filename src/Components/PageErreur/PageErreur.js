import './PageErreur.scss';
import { NavLink } from 'react-router-dom';

function PageErreurconfig() {
  return (
    <div className="erreurMain">

      <div className="erreurMain__numero" >
        404
      </div>
      <div className="erreurMain__message">
        Oups! La page que vous demandez n'existe pas.
      </div>

      <div className="erreurMain__retour"
        style={{ maxwidth: '284px', height: '96px', paddingTop: "30px", marginBottom: "50px", }}>

        <NavLink className='lmj-title' to='/'> Retourner sur la page d’accueil </NavLink>
      </div>

    </div>
  );
}

export default PageErreurconfig;