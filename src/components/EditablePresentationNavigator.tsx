
import React, { useState } from 'react';
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

  return (
    <div className="w-full">
      {slides.map((slide, index) => {
        const SlideComponent = slide.component;
        return (
          <div key={index} className="w-full">
            <SlideComponent 
              isEditMode={false} 
              slideTexts={slideTexts} 
              setSlideTexts={setSlideTexts} 
            />
          </div>
        );
      })}
    </div>
  );
};

export default EditablePresentationNavigator;
