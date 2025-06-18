
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TitleSlide from './presentation/TitleSlide';
import ProblemSlide from './presentation/ProblemSlide';
import LossChainSlide from './presentation/LossChainSlide';
import SolutionSlide from './presentation/SolutionSlide';
import EconomicsSlide from './presentation/EconomicsSlide';

const PresentationNavigator = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: TitleSlide, title: "Заглавный слайд" },
    { component: ProblemSlide, title: "Глобальная проблема" },
    { component: LossChainSlide, title: "Цепочка потерь" },
    { component: SolutionSlide, title: "Решение AIVA" },
    { component: EconomicsSlide, title: "Экономика" }
  ];

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative">
      <CurrentSlideComponent />
      
      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200 shadow-lg">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="text-slate-600 hover:text-slate-900"
            >
              ←
            </Button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
              className="text-slate-600 hover:text-slate-900"
            >
              →
            </Button>
          </div>
        </div>
      </div>

      {/* Slide info */}
      <div className="fixed top-8 left-8 z-40">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-600 font-light">
            {currentSlide + 1} / {slides.length} — {slides[currentSlide].title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresentationNavigator;
