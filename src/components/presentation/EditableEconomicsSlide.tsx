
import React, { useState } from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { useIsMobile } from '../../hooks/use-mobile';
import CostCard from './economics/CostCard';
import MobileToggle from './economics/MobileToggle';
import SavingsHighlight from './economics/SavingsHighlight';
import DesktopComparison from './economics/DesktopComparison';

interface EditableEconomicsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableEconomicsSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableEconomicsSlideProps) => {
  const isMobile = useIsMobile();
  const [currentView, setCurrentView] = useState(0); // 0 = До AIVA, 1 = С AIVA
  const slideId = 'economics-slide';
  const currentTexts = slideTexts[slideId] || {};

  const updateText = (key: string, newText: string) => {
    if (setSlideTexts) {
      setSlideTexts({
        ...slideTexts,
        [slideId]: {
          ...currentTexts,
          [key]: newText
        }
      });
    }
  };

  const beforeCosts = [
    { item: "ФОТ отдела (например, 9 менеджеров)", amount: "9 180 000", detail: "при 85 000 ₽ оклада" },
    { item: "Потери на текучку и обучение", amount: "1 200 000", detail: "" },
    { item: "Потери от \"невидимых\" лидов и неэффективных звонков", amount: "3 000 000", detail: "" },
    { item: "Прочие расходы (отпуска, больничные, просто downtime)", amount: "900 000", detail: "" }
  ];

  const afterCosts = [
    { item: "Подписка на платформу AIVA", amount: "2 500 000", detail: "" },
    { item: "Дополнительные операционные издержки", amount: "0", detail: "(нет текучки, больничных, перерывов)" },
    { item: "Пропущенные лиды", amount: "0", detail: "(AI не уходит, не \"забывает\")" },
    { item: "Весь контроль — онлайн", amount: "0", detail: "без доп. зарплат и головной боли" }
  ];

  const totalBefore = beforeCosts.reduce((sum, cost) => sum + parseInt(cost.amount.replace(/\s/g, '')), 0);
  const totalAfter = afterCosts.reduce((sum, cost) => sum + parseInt(cost.amount.replace(/\s/g, '')), 0);
  const savings = totalBefore - totalAfter;

  return (
    <PresentationSlide slideNumber={5} background="default">
      <div className="space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <EditableText
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight"
            isEditing={isEditMode}
            onSave={(text) => updateText('title', text)}
          >
            {currentTexts.title || "Честная математика: сколько ваш бизнес экономит с AIVA"}
          </EditableText>
          <div className="w-24 sm:w-32 lg:w-48 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Responsive layout */}
        {isMobile ? (
          <div className="max-w-md mx-auto space-y-6">
            <MobileToggle currentView={currentView} setCurrentView={setCurrentView} />
            
            <div className="transition-all duration-500">
              {currentView === 0 ? (
                <CostCard 
                  title="До AIVA" 
                  costs={beforeCosts} 
                  total={totalBefore}
                  isAfter={false}
                  isEditMode={isEditMode}
                  currentTexts={currentTexts}
                  updateText={updateText}
                />
              ) : (
                <CostCard 
                  title="С AIVA" 
                  costs={afterCosts} 
                  total={totalAfter}
                  isAfter={true}
                  isEditMode={isEditMode}
                  currentTexts={currentTexts}
                  updateText={updateText}
                />
              )}
            </div>
          </div>
        ) : (
          <DesktopComparison
            beforeCosts={beforeCosts}
            afterCosts={afterCosts}
            totalBefore={totalBefore}
            totalAfter={totalAfter}
            isEditMode={isEditMode}
            currentTexts={currentTexts}
            updateText={updateText}
          />
        )}

        <SavingsHighlight
          savings={savings}
          isEditMode={isEditMode}
          currentTexts={currentTexts}
          updateText={updateText}
        />
      </div>
    </PresentationSlide>
  );
};

export default EditableEconomicsSlide;
