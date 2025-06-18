
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { ArrowDown, TrendingDown } from 'lucide-react';

interface EditableLossChainSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableLossChainSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableLossChainSlideProps) => {
  const slideId = 'loss-chain-slide';
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

  const lossSteps = [
    {
      title: "Заявка приходит",
      subtitle: "Потенциальный клиент заинтересован",
      loss: "0%"
    },
    {
      title: "Ожидание в очереди",
      subtitle: "Менеджеры заняты, клиент ждёт",
      loss: "15%"
    },
    {
      title: "Неудачный первый контакт",
      subtitle: "Менеджер не готов, говорит невпопад",
      loss: "25%"
    },
    {
      title: "Потеря в процессе",
      subtitle: "Забыли перезвонить, не довели до сделки",
      loss: "35%"
    },
    {
      title: "Итого потеряно",
      subtitle: "Из 100 горячих лидов только 25 становятся клиентами",
      loss: "75%"
    }
  ];

  return (
    <PresentationSlide slideNumber={3} background="default">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <EditableText
            as="h1"
            className="text-5xl font-light text-slate-900 leading-tight"
            isEditing={isEditMode}
            onSave={(text) => updateText('title', text)}
          >
            {currentTexts.title || (
              <>
                Цепочка потерь: как «горячие» лиды
                <br />
                <span className="text-red-500 font-normal">превращаются в упущенную прибыль</span>
              </>
            )}
          </EditableText>
        </div>

        {/* Loss chain visualization */}
        <div className="max-w-4xl mx-auto space-y-8">
          {lossSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`flex items-center space-x-8 p-6 rounded-2xl border transition-all duration-300 ${
                index === lossSteps.length - 1 
                  ? 'bg-gradient-to-r from-red-50 to-red-100 border-red-200' 
                  : 'bg-white/60 backdrop-blur-sm border-slate-200/50 hover:border-red-200'
              }`}>
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    index === lossSteps.length - 1
                      ? 'bg-red-500 text-white'
                      : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600'
                  }`}>
                    <span className="text-xl font-light">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <EditableText
                    as="h3"
                    className="text-xl font-medium text-slate-900"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`stepTitle${index}`, text)}
                  >
                    {currentTexts[`stepTitle${index}`] || step.title}
                  </EditableText>
                  <EditableText
                    as="p"
                    className="text-slate-600"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`stepSubtitle${index}`, text)}
                  >
                    {currentTexts[`stepSubtitle${index}`] || step.subtitle}
                  </EditableText>
                </div>
                
                <div className="flex-shrink-0 text-right">
                  <EditableText
                    as="span"
                    className={`text-2xl font-light ${
                      index === lossSteps.length - 1 ? 'text-red-600' : 'text-slate-700'
                    }`}
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`stepLoss${index}`, text)}
                  >
                    {currentTexts[`stepLoss${index}`] || step.loss}
                  </EditableText>
                  <p className="text-sm text-slate-500">потерь</p>
                </div>
              </div>
              
              {index < lossSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown className="w-6 h-6 text-red-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom conclusion */}
        <div className="bg-gradient-to-r from-slate-900 via-red-900 to-slate-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-slate-600/20"></div>
          <div className="relative z-10 text-center space-y-4">
            <TrendingDown className="w-12 h-12 text-red-400 mx-auto" />
            <EditableText
              as="h3"
              className="text-2xl font-light text-white"
              isEditing={isEditMode}
              onSave={(text) => updateText('bottomTitle', text)}
            >
              {currentTexts.bottomTitle || 'Каждый четвёртый клиент уходит к конкурентам'}
            </EditableText>
            <EditableText
              as="p"
              className="text-lg text-slate-300 font-light max-w-3xl mx-auto"
              isEditing={isEditMode}
              onSave={(text) => updateText('bottomText', text)}
            >
              {currentTexts.bottomText || 'не потому что ваш продукт хуже, а потому что система продаж даёт сбой'}
            </EditableText>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableLossChainSlide;
