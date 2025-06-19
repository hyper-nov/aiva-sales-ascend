
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
      <div className="relative min-h-screen py-16 overflow-hidden">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-400/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-12 w-48 h-48 rounded-full bg-gradient-to-r from-slate-800/15 to-blue-900/15 blur-2xl"></div>
          <div className="absolute top-3/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-xl"></div>
          
          {/* Elegant lines */}
          <div className="absolute top-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute bottom-1/3 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-16 max-w-6xl mx-auto px-8">
          {/* Header */}
          <div className="text-center space-y-6">
            <EditableText
              as="h1"
              className="text-5xl font-light text-slate-900 leading-tight"
              isEditing={isEditMode}
              onSave={(text) => updateText('title', text)}
            >
              {currentTexts.title || 'На чем реально происходят эти потери?'}
            </EditableText>
          </div>

          {/* Loss chain */}
          <div className="max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-20 bottom-20 w-0.5 bg-gradient-to-b from-blue-300 via-slate-400 to-slate-600"></div>
            
            <div className="space-y-12">
              {lossSteps.map((step, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Step circle */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 
                    index === lossSteps.length - 1 ? 'bg-gradient-to-r from-slate-500 to-slate-600' : 
                    'bg-gradient-to-r from-slate-400 to-slate-500'
                  }`}></div>
                  
                  {/* Step content */}
                  <div className="w-full max-w-4xl mx-auto grid grid-cols-2 gap-8 items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-right">
                          <div className="inline-block bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-slate-200/60 shadow-lg">
                            <EditableText
                              as="p"
                              className={`text-lg font-light ${
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
                          <div className="inline-block bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-slate-200/60 shadow-lg">
                            <EditableText
                              as="p"
                              className={`text-lg font-light ${
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
