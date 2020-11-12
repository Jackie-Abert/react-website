import React from 'react';
import './CSS/App.css';
import Header from './Header';
import Footer from './Footer';
import ContactPage from './ContactPage';
import Projects from './Projects';
import { Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import Skills from './Skills';

export default function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactPage />

        {/* <Route path='/home' component={HomePage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={AboutMe} /> */}
      <Footer />
    </div>
  );
}
