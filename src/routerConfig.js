import Banner from './Components/Banner/Banner.js'
import Footer from './Components/Footer/Footer.js'
import './Style/Style.scss';
import React from 'react';
import { NavLink, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div ClassName="main" style={{ maxwidth: '1440px', height: 'auto'}}><Banner /><Footer /></div>,
    errorElement : <div style={{ width: '1440px', height: 'auto'}}><Banner /><PageErreur /><Footer /></div>,
    children: [{

        path:'APropos',
        element: <div> A propos</div>
    },
    {
        path:'logement',
        element: <div> logement</div>
    }
]}])
;


function PageErreur () {
    return <>
  
    <div style={{ maxwidth: '1440px', height: '559px'}}>
       Erreur 404 
    </div>
    </>
}

function Root () {
    return <>
    <header>
    <nav style={{ width: '309px'}}>
        <NavLink to='/'> Accueil </NavLink>
        <NavLink to='APropos'> A Propos de moi  </NavLink>
        </nav>
    </header>
    <div ClassName="Container">
      
    </div>
    </>
}




export default router;
