import React from 'react';
import Navigation from './Navigation';
import Headshot from '../Headshot';

function Header({ currentPage, handlePageChange }) {
    return (
      <div>
        <div className="header">
          <h1 className="header-brian">Brian</h1>
          <h1 className="header-campbell">Campbell</h1>
          <Headshot />
          <Navigation className="nav-style" currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
      );
}

export default Header;
