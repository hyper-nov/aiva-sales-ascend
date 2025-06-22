
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Clock, Users, Monitor, Star } from 'lucide-react';

const ProblemSlide = () => {
  const problems = [
    {
      icon: Clock,
      stat: "22%",
      description: "времени менеджер реально продаёт",
      detail: "Всё остальное — отчёты, CRM, \"совещания\" и рутина"
    },
    {
      icon: Users,
      stat: "40%",
      description: "лидов теряются без единого звонка",
      detail: "\"Горячие\" заявки уходят конкурентам из-за очереди"
    },
    {
      icon: Monitor,
      stat: "52%",
      description: "разговоров — \"невидимки\"",
      detail: "Никто не анализирует — вы не знаете, где сливаются клиенты"
    },
    {
      icon: Star,
      stat: "20%",
      description: "клиентов бросают заявку",
      detail: "Только из-за ожидания ответа"
    }
  ];

  return (
    <PresentationSlide slideNumber={2} background="default">
      <div className="w-full h-auto py-8 sm:py-16 space-y-12 sm:space-y-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-slate-900 leading-tight">
            Как каждый день ваш бизнес
            <br />
            <span className="text-red-500 font-normal">теряет деньги</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light">Факты, которые болят</p>
        </div>

        {/* Problems grid - responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/50 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-100/50 h-full">
                {/* Mobile layout: icon and stat on top, text below */}
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                  <div className="flex items-center space-x-4 sm:flex-col sm:space-x-0 sm:items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                        <problem.icon className="w-8 h-8 sm:w-9 sm:h-9 text-red-500" />
                      </div>
                    </div>
                    <div className="sm:mt-4">
                      <span className="text-4xl sm:text-5xl font-light text-red-500">{problem.stat}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    <span className="text-lg sm:text-xl text-slate-700 font-light block">{problem.description}</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{problem.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center pt-4 sm:pt-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium max-w-4xl mx-auto">
            Только в этом месяце вы уже потеряли часть выручки, 
            <span className="text-red-500"> даже не зная об этом</span>
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default ProblemSlide;
