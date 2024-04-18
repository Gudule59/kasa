import logo from '../Assets/logo.png';
import './Banner.scss';
import { NavLink } from 'react-router-dom';


function Banner() {
	
return <>
		<header>
			<div className='Banner' >
	    		<img className='Banner__logo' src={logo} alt="Logo" />
				<nav>
					<NavLink className='Banner__title' to='/'> Accueil </NavLink>
					<NavLink className='Banner__title' to='/APropos'> A Propos </NavLink>
				</nav>
			</div>
		</header>
	
		</>
	}
export default Banner