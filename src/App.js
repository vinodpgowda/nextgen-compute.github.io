import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';
import Publications from './pages/Publications/Publications';
import Projects from './pages/Projects/Projects';
import Courses from './pages/Courses/Courses';
import People from './pages/People/People';
import Contact from './pages/Contact/Contact';
import Outreach from './pages/Outreach/Outreach';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/courses" element={<Courses />} /> */}
            <Route path="/people" element={<People />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/outreach" element={<Outreach />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
