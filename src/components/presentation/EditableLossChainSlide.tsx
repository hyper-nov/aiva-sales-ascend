
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';

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
    "Входящий лид",
    "Ожидание — 10 мин.",
    "Менеджер занят рутиной",
    "Пропущен звонок / потерян интерес",
    "В CRM \"висят\" заявки",
    "Нет контроля за завершением сделки",
    "Деньги ушли конкуренту"
  ];

  return (
    <PresentationSlide slideNumber={3} background="default">
      <div className="relative min-h-screen py-20 overflow-hidden">
        {/* Enhanced futuristic background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/12 to-cyan-400/12 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-12 w-80 h-80 rounded-full bg-gradient-to-r from-slate-800/18 to-blue-900/18 blur-2xl"></div>
          <div className="absolute top-3/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400/12 to-blue-600/12 blur-xl"></div>
          
          {/* Enhanced elegant lines */}
          <div className="absolute top-1/3 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          <div className="absolute bottom-1/3 left-1/3 w-px h-28 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-20 max-w-7xl mx-auto px-8">
          {/* Enhanced header */}
          <div className="text-center space-y-8">
            <EditableText
              as="h1"
              className="text-7xl font-light text-slate-900 leading-tight"
              isEditing={isEditMode}
              onSave={(text) => updateText('title', text)}
            >
              {currentTexts.title || 'На чем реально происходят эти потери?'}
            </EditableText>
          </div>

          {/* Enhanced loss chain */}
          <div className="max-w-6xl mx-auto relative">
            {/* Enhanced connecting line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-24 bottom-24 w-1 bg-gradient-to-b from-blue-300 via-slate-400 to-slate-600 rounded-full"></div>
            
            <div className="space-y-16">
              {lossSteps.map((step, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Enhanced step circle */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 shadow-lg ${
                    index === 0 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 
                    index === lossSteps.length - 1 ? 'bg-gradient-to-r from-slate-500 to-slate-600' : 
                    'bg-gradient-to-r from-slate-400 to-slate-500'
                  }`}></div>
                  
                  {/* Enhanced step content */}
                  <div className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-right">
                          <div className="inline-block bg-gradient-to-br from-white/95 to-slate-50/95 backdrop-blur-sm rounded-3xl px-8 py-6 border border-slate-200/70 shadow-xl">
                            <EditableText
                              as="p"
                              className={`text-2xl font-light ${
                                index === 0 ? 'text-blue-700' :
                                index === lossSteps.length - 1 ? 'text-slate-700' :
                                'text-slate-600'
                              }`}
                              isEditing={isEditMode}
                              onSave={(text) => updateText(`step${index}`, text)}
                            >
                              {currentTexts[`step${index}`] || step}
                            </EditableText>
                          </div>
                        </div>
                        <div></div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div className="text-left">
                          <div className="inline-block bg-gradient-to-br from-white/95 to-slate-50/95 backdrop-blur-sm rounded-3xl px-8 py-6 border border-slate-200/70 shadow-xl">
                            <EditableText
                              as="p"
                              className={`text-2xl font-light ${
                                index === 0 ? 'text-blue-700' :
                                index === lossSteps.length - 1 ? 'text-slate-700' :
                                'text-slate-600'
                              }`}
                              isEditing={isEditMode}
                              onSave={(text) => updateText(`step${index}`, text)}
                            >
                              {currentTexts[`step${index}`] || step}
                            </EditableText>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableLossChainSlide;
