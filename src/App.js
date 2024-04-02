import Banner from './Components/Banner/Banner.js'
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Page d'accueil
        <nav>
          <a href="/">Accueil</a>
          <a href="/aPropos">A propos</a>
        </nav>
      </div>
    ),
  },
  {
    path: '/aPropos',
    element: (
      <div>
        A Propos
        <nav>
          <a href="/">Accueil</a>
          <a href="/aPropos">A propos</a>
        </nav>
      </div>
    ),
  },
  {
    path: '/logement',
    element: (
      <div>
        Fiche Logement
        <nav>
          <a href="/">Accueil</a>
          <a href="/aPropos">A propos</a>
        </nav>
      </div>
    ),
  },
  {
    path: '/404',
    element: (
      <div>
        Erreur 404
        <nav>
          <a href="/">Accueil</a>
          <a href="/aPropos">A propos</a>
        </nav>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



  //  <div className="App">
 ////     <header className="App-header">
//      <Banner>
//      <img src={logo} alt='La maison jungle' className='lmj-logo' />
	//			<h1 className='lmj-title'>La maison jungle</h1>
	//		</Banner>
       
  ///      <p>
  ///        Kaza Immobilier
  ///      </p>
     ///     <a
    ///        className="App-link"
     /// ///        href="https://reactjs.org"
  ///          target="_blank"
   ///        rel="noopener noreferrer"
    ///      >
   ///         Learn React
        ///  </a>
        ///</header>
      ///</div>
