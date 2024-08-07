import React, { Suspense, useState, useEffect } from 'react';
import './scss/styles.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import CustomHeader from './components/Custom/CustomHeader';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch or set your data here
    setData({ message: 'Hello, world!' });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <CustomHeader />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Add more routes as needed */}
          </Routes>
          <div style={{ height: '2px', backgroundColor: 'black' }}></div>
          <Footer />
        </Suspense>
        {data && <div>{data.message}</div>}
      </div>
    </div>
  );
}

export default App;
