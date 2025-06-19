
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import EditableTitleSlide from './presentation/EditableTitleSlide';
import EditableProblemSlide from './presentation/EditableProblemSlide';
import EditableLossChainSlide from './presentation/EditableLossChainSlide';
import EditableSolutionSlide from './presentation/EditableSolutionSlide';
import EditableEconomicsSlide from './presentation/EditableEconomicsSlide';
import EditableBenefitsSlide from './presentation/EditableBenefitsSlide';
import EditableComparisonSlide from './presentation/EditableComparisonSlide';
import EditableHumanVsAiSlide from './presentation/EditableHumanVsAiSlide';
import EditableHumanitySlide from './presentation/EditableHumanitySlide';
import EditableSegmentsSlide from './presentation/EditableSegmentsSlide';
import EditableMarketSlide from './presentation/EditableMarketSlide';
import EditableIntegrationSlide from './presentation/EditableIntegrationSlide';
import EditablePricingSlide from './presentation/EditablePricingSlide';
import EditableWhyUsSlide from './presentation/EditableWhyUsSlide';
import EditableCallToActionSlide from './presentation/EditableCallToActionSlide';

const EditablePresentationNavigator = () => {
  const [slideTexts, setSlideTexts] = useState<Record<string, Record<string, string>>>({});
  
  const slides = [
    { component: EditableTitleSlide, title: "Заглавный слайд" },
    { component: EditableProblemSlide, title: "Глобальная проблема" },
    { component: EditableLossChainSlide, title: "Цепочка потерь" },
    { component: EditableSolutionSlide, title: "Решение AIVA" },
    { component: EditableEconomicsSlide, title: "Экономика" },
    { component: EditableBenefitsSlide, title: "Реальные выгоды" },
    { component: EditableComparisonSlide, title: "Преимущества" },
    { component: EditableHumanVsAiSlide, title: "Человек vs. AI" },
    { component: EditableHumanitySlide, title: "Человечность" },
    { component: EditableSegmentsSlide, title: "Сегменты рынка" },
    { component: EditableMarketSlide, title: "Рынок и потенциал" },
    { component: EditableIntegrationSlide, title: "Интеграция" },
    { component: EditablePricingSlide, title: "Ценообразование" },
    { component: EditableWhyUsSlide, title: "Почему мы" },
    { component: EditableCallToActionSlide, title: "Призыв к действию" }
  ];

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
      {/* Render all slides in sequence */}
      <div className="space-y-0">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <SlideComponent 
              key={index}
              isEditMode={false} 
              slideTexts={slideTexts} 
              setSlideTexts={setSlideTexts} 
            />
          );
        })}
      </div>
      
      {/* Export button */}
      {Object.keys(slideTexts).length > 0 && (
        <div className="fixed top-8 right-8 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-slate-200 shadow-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={exportTexts}
              className="w-full justify-start"
            >
              <Download className="w-4 h-4 mr-2" />
              Экспорт текстов
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditablePresentationNavigator;
