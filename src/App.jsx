import React from 'react';
import { Hero } from './pages/Hero';
import { Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>}/>
      </Routes>
    </div>
  );
}

export default App;
