import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import tileBg from '../assets/tile-bg.png'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const sendContactForm = (input) => {
    console.log('weeeeee', input)
    const messages = [];
    messages.push(input);
    console.log(messages);
  }
  
  const styles = {
    pageBg: {
      background: `url("${tileBg}") top right repeat`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    },
    pageBgVh: {
      background: `url("${tileBg}") top right repeat`,
      backgroundAttachment: 'fixed',
      height: '100vh',
      backgroundSize: 'cover',
    },
  };

  var bg = styles.pageBgVh;

  // Determine page to render passed on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'About') {
      bg = styles.pageBgVh;
      return <About />;
    }
    if (currentPage === 'Projects') {
      bg = styles.pageBg;
      console.log(bg);
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      bg = styles.pageBgVh;
      return <Contact onSubmit={ sendContactForm } />;
    }
    if (currentPage === 'Resume') {
      bg = styles.pageBg;
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div style={bg}>
      < Header currentPage={ currentPage } handlePageChange={ handlePageChange } />
        <div className="page-content">
          { renderPage() }
        </div>
      < Footer />
    </div>
  );
}
