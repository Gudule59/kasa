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
    <div style={{ maxwidth: '1440px', height: '559px'}}>
      Erreur 404
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
