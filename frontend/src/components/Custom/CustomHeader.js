import React from 'react';
import './CustomHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="atonixcorp-text">
            <span className="color1">o</span>
            <span className="color2">f</span>
            <span className="color3">i</span>
            <span className="color4">d</span>
            <span className="color5">o</span>
            <span className="color6">h</span>
            <span className="color7">u</span>
            <span className="color8">b</span>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
