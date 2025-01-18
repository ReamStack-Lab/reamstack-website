import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-[#020617]/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/reamstack-uploads/cf00eccd-785a-4e05-8eb4-5478fd4622b6.png" 
                alt="ReamStack Logo" 
                className="h-14 w-auto"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</a>
              <a onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Features</a>
              <a onClick={() => scrollToSection('why-reamstack')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Why ReamStack</a>
              <a onClick={() => scrollToSection('installation')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Getting Started</a>
              <a onClick={() => scrollToSection('sponsors')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Sponsors</a>
              <a 
                href="https://github.com/ReamStack-Lab/reamstack" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Features</a>
            <a onClick={() => scrollToSection('why-reamstack')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Why ReamStack</a>
            <a onClick={() => scrollToSection('installation')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Getting Started</a>
            <a onClick={() => scrollToSection('sponsors')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Sponsors</a>
            <a 
              href="https://github.com/ReamStack-Lab/reamstack" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;