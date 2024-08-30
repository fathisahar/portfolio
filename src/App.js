import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <section className="about">
        </section>
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
