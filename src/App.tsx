import React from 'react';
import './App.css';
import { ExploreTopBooks } from './layouts/HomePage';
import { Navbar } from './layouts/NavbarAndFooter';

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
    </>
  );
}

export default App;
