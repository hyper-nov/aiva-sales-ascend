
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Eye, Download } from 'lucide-react';
import TitleSlide from './presentation/TitleSlide';
import ProblemSlide from './presentation/ProblemSlide';
import LossChainSlide from './presentation/LossChainSlide';
import SolutionSlide from './presentation/SolutionSlide';
import EconomicsSlide from './presentation/EconomicsSlide';
import BenefitsSlide from './presentation/BenefitsSlide';
import ComparisonSlide from './presentation/ComparisonSlide';
import HumanVsAiSlide from './presentation/HumanVsAiSlide';
import HumanitySlide from './presentation/HumanitySlide';
import SegmentsSlide from './presentation/SegmentsSlide';
import MarketSlide from './presentation/MarketSlide';
import IntegrationSlide from './presentation/IntegrationSlide';
import PricingSlide from './presentation/PricingSlide';
import WhyUsSlide from './presentation/WhyUsSlide';
import CallToActionSlide from './presentation/CallToActionSlide';

const EditablePresentationNavigator = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [slideTexts, setSlideTexts] = useState<Record<string, Record<string, string>>>({});
  
  const slides = [
    { component: TitleSlide, title: "Заглавный слайд" },
    { component: ProblemSlide, title: "Глобальная проблема" },
    { component: LossChainSlide, title: "Цепочка потерь" },
    { component: SolutionSlide, title: "Решение AIVA" },
    { component: EconomicsSlide, title: "Экономика" },
    { component: BenefitsSlide, title: "Реальные выгоды" },
    { component: ComparisonSlide, title: "Преимущества" },
    { component: HumanVsAiSlide, title: "Человек vs. AI" },
    { component: HumanitySlide, title: "Человечность" },
    { component: SegmentsSlide, title: "Сегменты рынка" },
    { component: MarketSlide, title: "Рынок и потенциал" },
    { component: IntegrationSlide, title: "Интеграция" },
    { component: PricingSlide, title: "Ценообразование" },
    { component: WhyUsSlide, title: "Почему мы" },
    { component: CallToActionSlide, title: "Призыв к действию" }
  ];

  const CurrentSlideComponent = slides[currentSlide].component;

  const exportTexts = () => {
    const dataStr = JSON.stringify(slideTexts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'presentation-texts.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative">
      <CurrentSlideComponent isEditMode={isEditMode} slideTexts={slideTexts} setSlideTexts={setSlideTexts} />
      
      {/* Edit Mode Controls */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-slate-200 shadow-lg space-y-2">
          <Button
            variant={isEditMode ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsEditMode(!isEditMode)}
            className="w-full justify-start"
          >
            {isEditMode ? <Eye className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
            {isEditMode ? 'Просмотр' : 'Редактировать'}
          </Button>
          
          {Object.keys(slideTexts).length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={exportTexts}
              className="w-full justify-start"
            >
              <Download className="w-4 h-4 mr-2" />
              Экспорт текстов
            </Button>
          )}
        </div>
      </div>

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
            {isEditMode && <span className="ml-2 text-blue-600">(Режим редактирования)</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditablePresentationNavigator;
