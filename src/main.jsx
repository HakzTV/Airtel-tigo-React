import React from 'react'
import ReactDOM from 'react-dom/client'


import Header from './components/header'
// import './index.css'
import HeroSection from './components/hero-section'
import AboutEsim from './components/abouteSim'
import PricingContainer from './components/Pricing'
import FaqComponent from './components/faq'
import ActivationComponent from './components/activation'
import FooterComponent from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

// Imported Routes being rendered
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header />
  <HeroSection />
  <AboutEsim />
  <PricingContainer />
  <FaqComponent />
  <ActivationComponent />
    <FooterComponent />
  </React.StrictMode>,
)
