
import React, { useState } from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

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

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  const CostCard = ({ title, costs, total, isAfter = false }) => (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-light text-slate-700 mb-4">{title}</h2>
        <div className={`w-full h-1 rounded-full ${isAfter ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 'bg-gradient-to-r from-slate-300 to-slate-400'}`}></div>
      </div>
      
      <div className={`${isAfter ? 'bg-gradient-to-br from-blue-50 to-cyan-50/50' : 'bg-gradient-to-br from-slate-50 to-slate-100/50'} backdrop-blur-sm rounded-3xl p-6 sm:p-8 border ${isAfter ? 'border-blue-200/50' : 'border-slate-200/50'} space-y-4 sm:space-y-6 min-h-[400px] flex flex-col justify-between`}>
        <div className="space-y-4 sm:space-y-6">
          {costs.map((cost, index) => (
            <div key={index} className="group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <EditableText
                    as="span"
                    className="text-sm text-slate-700 leading-relaxed block"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`${isAfter ? 'after' : 'before'}Item${index}`, text)}
                  >
                    {currentTexts[`${isAfter ? 'after' : 'before'}Item${index}`] || cost.item}
                  </EditableText>
                  {cost.detail && (
                    <EditableText
                      as="span"
                      className={`text-xs ${isAfter ? 'text-blue-600' : 'text-slate-500'} block mt-1`}
                      isEditing={isEditMode}
                      onSave={(text) => updateText(`${isAfter ? 'after' : 'before'}Detail${index}`, text)}
                    >
                      {currentTexts[`${isAfter ? 'after' : 'before'}Detail${index}`] || cost.detail}
                    </EditableText>
                  )}
                </div>
                <EditableText
                  as="span"
                  className={`text-base sm:text-lg font-medium whitespace-nowrap ${isAfter ? 'text-blue-700' : 'text-slate-800'}`}
                  isEditing={isEditMode}
                  onSave={(text) => updateText(`${isAfter ? 'after' : 'before'}Amount${index}`, text)}
                >
                  {currentTexts[`${isAfter ? 'after' : 'before'}Amount${index}`] || (cost.amount === "0" ? "0 ₽" : `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽/год`)}
                </EditableText>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`border-t ${isAfter ? 'border-blue-200' : 'border-slate-300'} pt-4 sm:pt-6`}>
          <div className={`flex justify-between items-center ${isAfter ? 'bg-gradient-to-r from-blue-100/70 to-cyan-100/70' : 'bg-white/70'} rounded-2xl p-4`}>
            <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
            <span className={`text-xl sm:text-2xl font-bold ${isAfter ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent' : 'text-slate-800'}`}>
              {formatNumber(total)} ₽/год
            </span>
          </div>
        </div>
      </div>
    </div>
  );

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
            {currentTexts.title || (
              <>
                Честная математика:
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-normal">сколько ваш бизнес экономит с AIVA</span>
              </>
            )}
          </EditableText>
        </div>

        {/* Responsive layout */}
        {isMobile ? (
          <div className="max-w-md mx-auto space-y-6">
            {/* Toggle buttons */}
            <div className="flex bg-slate-100 rounded-2xl p-1">
              <button
                onClick={() => setCurrentView(0)}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 ${
                  currentView === 0 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                До AIVA
              </button>
              <button
                onClick={() => setCurrentView(1)}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 ${
                  currentView === 1 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                С AIVA
              </button>
            </div>

            {/* Content */}
            <div className="transition-all duration-500">
              {currentView === 0 ? (
                <CostCard 
                  title="До AIVA" 
                  costs={beforeCosts} 
                  total={totalBefore}
                  isAfter={false}
                />
              ) : (
                <CostCard 
                  title="С AIVA" 
                  costs={afterCosts} 
                  total={totalAfter}
                  isAfter={true}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <TrendingDown className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-light text-slate-700">До AIVA</h2>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 space-y-6">
                {beforeCosts.map((cost, index) => (
                  <div key={index} className="group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <EditableText
                          as="span"
                          className="text-sm text-slate-700 leading-relaxed block"
                          isEditing={isEditMode}
                          onSave={(text) => updateText(`beforeItem${index}`, text)}
                        >
                          {currentTexts[`beforeItem${index}`] || cost.item}
                        </EditableText>
                        {cost.detail && (
                          <EditableText
                            as="span"
                            className="text-xs text-slate-500 block mt-1"
                            isEditing={isEditMode}
                            onSave={(text) => updateText(`beforeDetail${index}`, text)}
                          >
                            {currentTexts[`beforeDetail${index}`] || cost.detail}
                          </EditableText>
                        )}
                      </div>
                      <EditableText
                        as="span"
                        className="text-lg font-medium text-slate-800 whitespace-nowrap"
                        isEditing={isEditMode}
                        onSave={(text) => updateText(`beforeAmount${index}`, text)}
                      >
                        {currentTexts[`beforeAmount${index}`] || `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽/год`}
                      </EditableText>
                    </div>
                  </div>
                ))}
                
                <div className="border-t border-slate-300 pt-6">
                  <div className="flex justify-between items-center bg-white/70 rounded-2xl p-4">
                    <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
                    <span className="text-2xl font-bold text-slate-800">
                      {formatNumber(totalBefore)} ₽/год
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-light text-slate-700">С AIVA</h2>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 space-y-6">
                {afterCosts.map((cost, index) => (
                  <div key={index} className="group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <EditableText
                          as="span"
                          className="text-sm text-slate-700 leading-relaxed block"
                          isEditing={isEditMode}
                          onSave={(text) => updateText(`afterItem${index}`, text)}
                        >
                          {currentTexts[`afterItem${index}`] || cost.item}
                        </EditableText>
                        {cost.detail && (
                          <EditableText
                            as="span"
                            className="text-xs text-blue-600 block mt-1"
                            isEditing={isEditMode}
                            onSave={(text) => updateText(`afterDetail${index}`, text)}
                          >
                            {currentTexts[`afterDetail${index}`] || cost.detail}
                          </EditableText>
                        )}
                      </div>
                      <EditableText
                        as="span"
                        className="text-lg font-medium text-blue-700 whitespace-nowrap"
                        isEditing={isEditMode}
                        onSave={(text) => updateText(`afterAmount${index}`, text)}
                      >
                        {currentTexts[`afterAmount${index}`] || (cost.amount === "0" ? "0 ₽" : `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽/год`)}
                      </EditableText>
                    </div>
                  </div>
                ))}
                
                <div className="border-t border-blue-200 pt-6">
                  <div className="flex justify-between items-center bg-gradient-to-r from-blue-100/70 to-cyan-100/70 rounded-2xl p-4">
                    <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {formatNumber(totalAfter)} ₽/год
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Savings highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-6 sm:p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
            <div className="relative z-10 text-center space-y-4">
              <EditableText
                as="h3"
                className="text-2xl sm:text-3xl font-light text-white"
                isEditing={isEditMode}
                onSave={(text) => updateText('savingsTitle', text)}
              >
                {currentTexts.savingsTitle || (
                  <>
                    Экономия до <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{formatNumber(savings)} ₽/год</span>
                  </>
                )}
              </EditableText>
              <EditableText
                as="p"
                className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto"
                isEditing={isEditMode}
                onSave={(text) => updateText('savingsDescription', text)}
              >
                {currentTexts.savingsDescription || 'AIVA не просто дешевле, она сразу же приносит дополнительную прибыль за счет роста эффективности'}
              </EditableText>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableEconomicsSlide;
