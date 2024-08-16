import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from './Canvas'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Canvas/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
