
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Cpu, Shield, TrendingUp, Award } from 'lucide-react';

const WhyUsSlide = () => {
  const reasons = [
    {
      icon: Cpu,
      title: "Технология без компромиссов",
      description: "Используем локальные LLM-модели, голос максимально \"живой\", обучаемся под конкретный бизнес, а не \"под шаблон\"",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Масштаб и безопасность",
      description: "Можем внедрять в любую структуру, интегрируемся со всеми ведущими CRM, соответствуем высоким стандартам безопасности",
      accent: "from-purple-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Гарантия экономического эффекта",
      description: "Наши клиенты экономят ФОТ и время, получают рост конверсии до 25% и полный контроль продаж",
      accent: "from-cyan-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Опыт внедрения в крупнейших компаниях",
      description: "Наши решения уже работают для ритейла, B2B, IT и других отраслей с самым высоким уровнем требований",
      accent: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <PresentationSlide slideNumber={14} background="default">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            Почему владельцы крупных компаний
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">выбирают AIVA</span>
          </h1>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 h-full">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${reason.accent} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 flex-1">{reason.title}</h3>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed">{reason.description}</p>
                  
                  <div className={`w-full h-1 bg-gradient-to-r ${reason.accent} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-100 relative">
          <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          <div className="text-center space-y-4">
            <p className="text-2xl font-light text-slate-700 italic leading-relaxed">
              "С AIVA я наконец-то вижу, куда уходят мои деньги — 
              <span className="text-blue-600 font-medium"> и возвращаю их бизнесу</span>"
            </p>
            <p className="text-sm text-slate-500">
              — собственник крупной компании
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-12 opacity-60">
          <div className="flex items-center space-x-3 text-slate-500">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-light">Проверенная технология</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-500">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span className="text-sm font-light">Гарантированный результат</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-500">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-sm font-light">Премиальная поддержка</span>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default WhyUsSlide;
