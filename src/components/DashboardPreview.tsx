import React, { useState } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { BrowserFrame } from './ui/browser-frame';
const DashboardPreview = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const toggleZoom = () => setIsZoomed(!isZoomed);
  return (
    <div className="relative group">
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isZoomed ? 'scale-150 z-50' : 'scale-100'
        }`}
      >
        <BrowserFrame url="app.reamstack.com/servers/debian-deploy">
          <img 
            src="/reamstack-uploads/a8ae3251-bf55-456c-814f-3bb058953c49.png" 
            alt="ReamStack Dashboard Preview" 
            className="w-full h-auto rounded-b-lg"
          />
        </BrowserFrame>
      </div>
      
      <button
        onClick={toggleZoom}
        className="absolute top-14 right-4 p-2 bg-gray-900/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        {isZoomed ? (
          <ZoomOut className="w-4 h-4 text-white" />
        ) : (
          <ZoomIn className="w-4 h-4 text-white" />
        )}
      </button>
    </div>
  );
};
export default DashboardPreview;