import React from 'react';
import { cn } from '@/lib/utils';
interface PresentationSlideProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'accent';
  slideNumber?: number;
}
const PresentationSlide = ({
  children,
  className,
  background = 'default',
  slideNumber
}: PresentationSlideProps) => {
  const backgroundStyles = {
    default: 'bg-gradient-to-br from-slate-50 to-white',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
    accent: 'bg-gradient-to-br from-purple-50 via-white to-blue-50'
  };
  return <div className={cn("w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-12 px-4 sm:px-8", backgroundStyles[background], className)}>
      {/* AI-themed background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-2xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.5) 1px, transparent 0)`,
      backgroundSize: '50px 50px'
    }}>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {children}
      </div>
      
      {slideNumber}
    </div>;
};
export default PresentationSlide;