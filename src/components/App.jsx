import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import '../styles/Header.css';
import '../styles/Home.css';
import '../styles/Work.css';
import '../styles/About.css';
import '../styles/Contact.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
