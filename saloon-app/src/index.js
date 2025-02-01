import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteContext from './components/NoteContext';
import NoteState from './components/NoteState';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import HealingHands from './components/HealingHands';
import BenefitsPage from './components/Benifits';
const NavFunc = () => {
  return (
    <>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/book" element={<BookingPage/>} />
        <Route path="/healing" element={<HealingHands/>} />
        <Route path="/benefits" element={<BenefitsPage/>} />
        </Routes>
      <Footer/>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NoteState>
    <Router>
      <NavFunc />
    </Router>
  </NoteState>
</React.StrictMode>
);