
import React from 'react';
import EditableTitleSlide from './presentation/EditableTitleSlide';
import EditableProblemSlide from './presentation/EditableProblemSlide';
import EditableSolutionSlide from './presentation/EditableSolutionSlide';
import EditableEconomicsSlide from './presentation/EditableEconomicsSlide';
import EditableBenefitsSlide from './presentation/EditableBenefitsSlide';
import EditableComparisonSlide from './presentation/EditableComparisonSlide';
import AutomationProcessesBlock from './AutomationProcessesBlock';
import EditableCallToActionSlide from './presentation/EditableCallToActionSlide';
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
      
      {/* Новый блок автоматизации */}
      <AutomationProcessesBlock />
      
      <EditableCallToActionSlide />
      
      {/* Политики */}
      <PrivacyPolicies />
      
      {/* AI Чат-бот */}
      <AIChatBot />
    </div>
  );
};

export default LandingPage;
