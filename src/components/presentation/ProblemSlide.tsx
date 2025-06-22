
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Clock, Users, Monitor, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useIsMobile } from '../../hooks/use-mobile';

const ProblemSlide = () => {
  const isMobile = useIsMobile();
  
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

  const ProblemCard = ({ problem, index }) => (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/50 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-100/50 h-full">
      <div className="space-y-4 sm:space-y-6">
        {/* Mobile: stat and icon in row, desktop: column */}
        <div className="flex items-center space-x-4 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300 flex-shrink-0">
            <problem.icon className="w-8 h-8 text-red-500" />
          </div>
          <div className="text-4xl sm:text-5xl font-light text-red-500">{problem.stat}</div>
        </div>
        
        <div className="space-y-3">
          <div className="text-lg sm:text-xl text-slate-700 font-light">{problem.description}</div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{problem.detail}</p>
        </div>
      </div>
    </div>
  );

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

        {/* Problems - responsive */}
        {isMobile ? (
          <div className="max-w-sm mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {problems.map((problem, index) => (
                  <CarouselItem key={index}>
                    <ProblemCard problem={problem} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="group">
                <ProblemCard problem={problem} index={index} />
              </div>
            ))}
          </div>
        )}

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
