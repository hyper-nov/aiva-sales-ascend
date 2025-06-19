
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface EditableEconomicsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableEconomicsSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableEconomicsSlideProps) => {
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

  return (
    <PresentationSlide slideNumber={5} background="default">
      <div className="relative min-h-screen py-16 overflow-hidden">
        {/* Futuristic background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-32 w-80 h-80 rounded-full bg-gradient-to-r from-slate-800/10 to-blue-900/10 blur-3xl"></div>
          <div className="absolute bottom-32 right-32 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-400/10 blur-3xl"></div>
          
          {/* Elegant lines */}
          <div className="absolute top-1/4 right-20 w-24 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute bottom-1/4 left-20 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-16 max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center space-y-6">
            <EditableText
              as="h1"
              className="text-5xl font-light text-slate-900 leading-tight"
              isEditing={isEditMode}
              onSave={(text) => updateText('title', text)}
            >
              {currentTexts.title || 'Честная математика: сколько ваш бизнес экономит с AIVA'}
            </EditableText>
          </div>

          {/* Comparison grid */}
          <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Before AIVA */}
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

            {/* After AIVA */}
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

          {/* Savings highlight */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-8 border border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
              <div className="relative z-10 text-center space-y-4">
                <EditableText
                  as="h3"
                  className="text-3xl font-light text-white"
                  isEditing={isEditMode}
                  onSave={(text) => updateText('savingsTitle', text)}
                >
                  {currentTexts.savingsTitle || `Экономия до ${formatNumber(savings)} ₽/год`}
                </EditableText>
                <EditableText
                  as="p"
                  className="text-lg text-slate-300 font-light max-w-2xl mx-auto"
                  isEditing={isEditMode}
                  onSave={(text) => updateText('savingsDescription', text)}
                >
                  {currentTexts.savingsDescription || 'AIVA не просто дешевле, она сразу же приносит дополнительную прибыль за счет роста эффективности'}
                </EditableText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableEconomicsSlide;
