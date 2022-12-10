import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
          <h1 className="header-brian">Brian Campbell</h1>
          <Navigation className="nav-style" currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      );
}

export default Header;
