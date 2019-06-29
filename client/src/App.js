import React from 'react';
import Home from './pages/Home'
import {Container} from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Put Navbar here */}
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;