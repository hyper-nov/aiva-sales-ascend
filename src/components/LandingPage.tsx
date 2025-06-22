
import React from 'react';
import EditableTitleSlide from './presentation/EditableTitleSlide';
import EditableProblemSlide from './presentation/EditableProblemSlide';
import EditableSolutionSlide from './presentation/EditableSolutionSlide';
import EditableEconomicsSlide from './presentation/EditableEconomicsSlide';
import EditableBenefitsSlide from './presentation/EditableBenefitsSlide';
import EditableComparisonSlide from './presentation/EditableComparisonSlide';
import EditableCallToActionSlide from './presentation/EditableCallToActionSlide';
import ContactForm from './ContactForm';
import PrivacyPolicies from './PrivacyPolicies';
import AIChatBot from './AIChatBot';

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Основные слайды */}
      <EditableTitleSlide />
      <EditableProblemSlide />
      <EditableSolutionSlide />
      <EditableEconomicsSlide />
      <EditableBenefitsSlide />
      <EditableComparisonSlide />
      
      {/* Форма заявки */}
      <div className="bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="max-w-2xl mx-auto px-8">
          <ContactForm />
        </div>
      </div>
      
      <EditableCallToActionSlide />
      
      {/* Политики */}
      <PrivacyPolicies />
      
      {/* AI Чат-бот */}
      <AIChatBot />
    </div>
  );
};

export default LandingPage;
