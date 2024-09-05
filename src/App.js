import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Extracurricular from './components/Extracurricular';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Experience />
        <Projects />
        <Extracurricular />
      </main>
    </div>
  );
}

export default App;
