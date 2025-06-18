
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Monitor, Zap, Shield, Star } from 'lucide-react';

const SolutionSlide = () => {
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

  return (
    <PresentationSlide slideNumber={4} background="gradient">
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* Left side - stressed owner */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-light text-slate-600 mb-4">Сегодня</h2>
            <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-red-100 to-red-50 rounded-3xl border-2 border-red-200 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-4xl">😰</div>
                <p className="text-sm text-red-600 font-light">Стресс, хаос,<br />потери контроля</p>
              </div>
              {/* Stress indicators */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right side - relaxed owner */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-light text-slate-900 leading-tight">
              Что вы на самом деле
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">получаете с AIVA</span>
            </h1>
            <p className="text-xl text-slate-600 font-light">
              AIVA — Когда бизнес работает, а вы живёте спокойно
            </p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-slate-600 mb-4">С AIVA</h2>
            <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-green-100 to-blue-50 rounded-3xl border-2 border-green-200 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-4xl">😌</div>
                <p className="text-sm text-green-600 font-light">Спокойствие,<br />контроль, рост</p>
              </div>
              {/* Success indicators */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits grid */}
      <div className="mt-16 grid grid-cols-2 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
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
        ))}
      </div>

      {/* Bottom conclusion */}
      <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
        <p className="text-lg text-slate-700 font-light">
          AIVA — это больше, чем инструмент для бизнеса. Это ваш гарантированный способ 
          <span className="text-blue-600 font-medium"> вернуть себе спокойствие и свободу</span>, 
          сохраняя рост и прибыль компании.
        </p>
      </div>
    </PresentationSlide>
  );
};

export default SolutionSlide;
