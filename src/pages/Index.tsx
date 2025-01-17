import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import TechStack from '../components/TechStack';
import Sponsors from '../components/Sponsors';
import Contributors from '../components/Contributors';
import Community from '../components/Community';
import Installation from '../components/Installation';
import OperationalStatus from '../components/OperationalStatus';
import Donation from '../components/Donation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-teal-800/20 to-[#020617] -z-10"></div>
      <Navbar />
      <Hero />
      <Challenges />
      <Features />
      <Screenshots />
      <TechStack />
      <Sponsors />
      <Contributors />
      <Community />
      <Installation />
      <OperationalStatus />
      <Donation />
      <Footer />
    </div>
  );
};

export default Index;