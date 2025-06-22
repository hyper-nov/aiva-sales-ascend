
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Monitor, Zap, Shield, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useIsMobile } from '../../hooks/use-mobile';

const SolutionSlide = () => {
  const isMobile = useIsMobile();

  const benefits = [
    {
      icon: Monitor,
      title: "Спокойствие за ключевые деньги",
      description: "Все сделки и обращения видны в реальном времени",
      result: "Ни один \"рубль\" не теряется в хаосе"
    },
    {
      icon: Zap,
      title: "Свобода от текучки и рутин",
      description: "Автоматизация до 80% \"бумажной\" работы и контроля",
      result: "Ваши люди делают только то, что действительно важно"
    },
    {
      icon: Shield,
      title: "Гибкость и масштабируемость",
      description: "Система сама растёт под ваш бизнес",
      result: "Не требует HR и найма \"в аврале\""
    },
    {
      icon: Star,
      title: "Личная жизнь без стресса",
      description: "Нет ежедневного \"тушения пожаров\"",
      result: "Вы управляете, а не спасаете бизнес"
    }
  ];

  // Группируем преимущества по парам для мобильной карусели
  const groupedBenefits = [];
  for (let i = 0; i < benefits.length; i += 2) {
    groupedBenefits.push(benefits.slice(i, i + 2));
  }

  const BenefitCard = ({ benefit, index }) => (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <benefit.icon className="w-5 h-5 text-blue-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-slate-900">{benefit.title}</h3>
          <p className="text-sm text-slate-600">{benefit.description}</p>
          <p className="text-sm text-blue-600 font-medium">→ {benefit.result}</p>
        </div>
      </div>
    </div>
  );

  return (
    <PresentationSlide slideNumber={4} background="gradient">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-light text-slate-900 leading-tight">
            Что вы на самом деле
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">получаете с AIVA</span>
          </h1>
        </div>

        {/* Visual comparison */}
        <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          {/* Before - Modern stressed visualization */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-light text-slate-600 mb-4">Сегодня</h2>
            <div className="relative">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-red-100 to-red-50 rounded-3xl border border-red-200 flex items-center justify-center relative overflow-hidden">
                {/* Stress visualization */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 to-orange-200/30"></div>
                <div className="relative z-10 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-red-400 rounded-full flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-red-700 font-medium">Стресс, хаос,<br />потери контроля</p>
                </div>
                {/* Animated stress indicators */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* After - Modern relaxed visualization */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-light text-slate-600 mb-4">С AIVA</h2>
            <div className="relative">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-50 rounded-3xl border border-blue-200 flex items-center justify-center relative overflow-hidden">
                {/* Success visualization */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30"></div>
                <div className="relative z-10 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-blue-700 font-medium">Спокойствие,<br />контроль, рост</p>
                </div>
                {/* Success indicators */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits - responsive */}
        {isMobile ? (
          <div className="max-w-full mx-auto px-4">
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent>
                {groupedBenefits.map((benefitPair, pairIndex) => (
                  <CarouselItem key={pairIndex}>
                    <div className="space-y-4">
                      {benefitPair.map((benefit, benefitIndex) => {
                        const actualIndex = pairIndex * 2 + benefitIndex;
                        return (
                          <BenefitCard key={actualIndex} benefit={benefit} index={actualIndex} />
                        );
                      })}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        )}

        {/* Bottom conclusion */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
          <p className="text-lg text-slate-700 font-light">
            AIVA — это больше, чем инструмент для бизнеса. Это ваш гарантированный способ 
            <span className="text-blue-600 font-medium"> вернуть себе спокойствие и свободу</span>, 
            сохраняя рост и прибыль компании.
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default SolutionSlide;
