import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from './ui/dialog';
import { BrowserFrame } from './ui/browser-frame';

const DashboardPreview = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer transition-transform hover:scale-[1.02] duration-200">
          <BrowserFrame url="app.reamstack.com/servers/debian-deploy">
            <img 
              src="/reamstack-uploads/a8ae3251-bf55-456c-814f-3bb058953c49.png" 
              alt="ReamStack Dashboard Preview" 
              className="w-full h-auto rounded-b-lg"
            />
          </BrowserFrame>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-screen-2xl w-screen h-screen p-0 border-none bg-transparent">
        <div className="w-full h-full flex items-center justify-center bg-black/90">
          <img 
            src="/reamstack-uploads/a8ae3251-bf55-456c-814f-3bb058953c49.png" 
            alt="ReamStack Dashboard Preview" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardPreview;