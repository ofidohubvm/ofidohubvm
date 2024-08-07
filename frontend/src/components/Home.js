import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Ensure you have this CSS file for custom styles
import Dropdown from './Dropdown';
import MainContent from './MainContent';

const Home = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleSection, setVisibleSection] = useState('');

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleVisibility = (section) => {
    setVisibleSection(visibleSection === section ? '' : section);
  };

  return (
    <main className="main-home-grid">
      <div className="mb-3">
        <button
          className="btn btn-primary d-flex align-items-center"
          onClick={toggleDropdownVisibility}
        >
          Technologies
          <span
            className={`arrow ml-2 ${isDropdownVisible ? 'up' : 'down'}`}
          ></span>
        </button>
        {isDropdownVisible && (
          <Dropdown
            visibleSection={visibleSection}
            toggleVisibility={toggleVisibility}
          />
        )}
      </div>
      <MainContent />
    </main>
  );
};

export default Home;
