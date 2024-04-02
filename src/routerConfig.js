import logo from './Components/Assets/logo.png';
import React from 'react';
import { NavLink, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement : <PageErreur />,
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
    <header>
        <nav>
        <NavLink to='/'> Accueil </NavLink>
        <NavLink to='APropos'> A Propos </NavLink>
        <NavLink to='logement'> logement </NavLink>
        </nav>
    </header>
    <div ClassName="Container">
       Erreur 404 
    </div>
    </>
}

function Root () {
    return <>
    <header>
        <nav>
        <NavLink to='/'> Accueil </NavLink>
        <NavLink to='APropos'> A Propos </NavLink>
        <NavLink to='logement'> logement </NavLink>
        </nav>
    </header>
    <div ClassName="Container">
      
    </div>
    </>
}




export default router;
