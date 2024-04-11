import logo from '../Assets/logo.png';
import './Banner.scss';
import { NavLink } from 'react-router-dom';


function Banner() {
	
return <>
		<header>
			<div className='Banniere' >
	    		<img className='lmj-logo' src={logo} alt="Logo" />
				<nav>
					<NavLink className='lmj-title' to='/'> Accueil </NavLink>
					<NavLink className='lmj-title' to='/APropos'> A Propos </NavLink>
				</nav>
			</div>
		</header>
	
		</>
	}
export default Banner