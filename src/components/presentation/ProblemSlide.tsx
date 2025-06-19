
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
      <div className="w-full h-auto py-16 space-y-20">
        {/* Header */}
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-light text-slate-900 leading-tight">
            Как каждый день ваш бизнес
            <br />
            <span className="text-red-500 font-normal">теряет деньги</span>
          </h1>
          <p className="text-2xl text-slate-600 font-light">Факты, которые болят</p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-100/50 h-full">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0 relative">
                    <div className="w-18 h-18 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                      <problem.icon className="w-9 h-9 text-red-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-baseline space-x-4">
                      <span className="text-5xl font-light text-red-500">{problem.stat}</span>
                      <span className="text-xl text-slate-700 font-light">{problem.description}</span>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed">{problem.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center pt-8">
          <p className="text-2xl text-slate-700 font-medium max-w-4xl mx-auto">
            Только в этом месяце вы уже потеряли часть выручки, 
            <span className="text-red-500"> даже не зная об этом</span>
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default ProblemSlide;
