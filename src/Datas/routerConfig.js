import Banner from './Components/Banner/Banner.js'
import Footer from './Components/Footer/Footer.js'
import Card from './Components/Card/Card.js'
import CardList from './Components/CardList/CardList.js'
import './Style/Style.scss';
import React from 'react';
import { NavLink, createBrowserRouter, useLocation } from 'react-router-dom';

const routerConfig = [
  {
    path: '/',
    element: (
      <div ClassName="main" style={{ maxwidth: '1440px', height: 'auto'}}>
        <Banner />
        <Root />
        <Footer />
      </div>
    ),
    errorElement: (
      <div style={{ width: '1440px', height: 'auto'}}>
        <Banner />
        <PageErreur />
        <Footer />
      </div>
    ),
    children: [
      {
        path: 'APropos',
        element: <APropos />,
      },
      {
        path: 'logement',
        element: <Logement />,
      }
    ]
  }
];

function SectionAccueil() {
  return <div ClassName="SectionAccueil"><Card /><CardList /></div>;
}

function PageErreur() {
  return (
    <div className="main2" style={{ maxwidth: '1440px', height: '576px'}}>
    
    <div style={{ 
    fontFamily : "Montserrat",
    fontSize: '200px',
    fontWeight :"700",
    color:"#FF6060",
    lineHeight: '410.69px',
    textAlign: 'center',
    Width: '597px',
    Height: '263px'
}}>
     404
</div>
  <div style={{ 
    width: '872px', 
    height: '51px',
     color:"#FF6060", 
     fontSize: '28px',
     margin:"60px",
     textAlign:'center'}}>


  Oups! La page que vous demandez n'existe pas.
    </div>
    <div style={{ maxwidth: '284px', height: '96px', paddingTop :"30px"}}>
    <NavLink className='lmj-title' to='/'> Retourner sur la page d’accueil </NavLink>  
    </div>
       </div>
  );
}

function APropos() {
  return <div> A propos</div>;
}

function Logement() {
  return <div> logement</div>;
}

function Root() {
  const location = useLocation();
  const isAccueil = routerConfig.some(route => route.path === location.pathname);

  return (
    <>
      <div ClassName="SectionAccueil">
        {isAccueil && <SectionAccueil />}
      </div>
    </>
  );
}

const router = createBrowserRouter(routerConfig);

export default router;
