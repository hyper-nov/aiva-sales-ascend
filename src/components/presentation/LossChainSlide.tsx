
import React from 'react';
import PresentationSlide from '../PresentationSlide';

const LossChainSlide = () => {
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
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            На чем реально происходят
            <br />
            <span className="text-red-500 font-normal">эти потери?</span>
          </h1>
        </div>

        {/* Loss chain with decorative elements */}
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative AI-themed background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl"></div>
            <div className="absolute bottom-1/4 right-12 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 blur-xl"></div>
            <div className="absolute top-3/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-lg"></div>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-20 bottom-20 w-0.5 bg-gradient-to-b from-blue-200 via-red-300 to-red-500"></div>
            
            <div className="space-y-16">
              {lossSteps.map((step, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Step circle */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                    index === 0 ? 'bg-blue-400' : 
                    index === lossSteps.length - 1 ? 'bg-red-500' : 
                    'bg-red-300'
                  }`}></div>
                  
                  {/* Step content with better positioning */}
                  <div className="w-full max-w-4xl mx-auto grid grid-cols-2 gap-8 items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-right">
                          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-slate-200 shadow-lg">
                            <p className={`text-lg font-light ${
                              index === 0 ? 'text-blue-700' :
                              index === lossSteps.length - 1 ? 'text-red-700' :
                              'text-red-600'
                            }`}>
                              {step}
                            </p>
                          </div>
                        </div>
                        <div></div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div className="text-left">
                          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-slate-200 shadow-lg">
                            <p className={`text-lg font-light ${
                              index === 0 ? 'text-blue-700' :
                              index === lossSteps.length - 1 ? 'text-red-700' :
                              'text-red-600'
                            }`}>
                              {step}
                            </p>
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

        {/* Bottom message */}
        <div className="text-center bg-red-50/50 rounded-2xl p-8 max-w-3xl mx-auto border border-red-100">
          <p className="text-xl text-red-700 font-light">
            Каждая потерянная минута = потерянный клиент = потерянная прибыль
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default LossChainSlide;
