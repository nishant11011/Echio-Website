import React from 'react';
import './App.css';
import './AppMediaQueries.css'
import HomePage from './Components/HomePage';
import BrandPage from './Components/BrandPage';
import InfluencersPage from './Components/InfluencersPage';
import StudioPage from './Components/StudioPage';
import AgencyPage from './Components/AgencyPage';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="container">
     <HomePage />
      <BrandPage />
    <InfluencersPage />
    <StudioPage />
     <AgencyPage />
    <Footer />  
    </div>
  );
}




