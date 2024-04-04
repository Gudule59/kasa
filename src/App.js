import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import routerConfig from './routerConfig'; 

function App() {
  return (
    <Router>
      {routerConfig}
    </Router>
  );
}

export default App;