import React, { useEffect, useState, Suspense } from 'react';
import './scss/styles.scss';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
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
    axios
      .get('http://127.0.0.1:5000/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <CustomHeader />
      <Menu />
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
