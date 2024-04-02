import Banner from './Components/Banner/Banner.js'
import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routerConfig'; 


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
