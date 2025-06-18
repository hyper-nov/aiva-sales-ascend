
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { TrendingUp, Globe, Target, Clock } from 'lucide-react';

const MarketSlide = () => {
  const marketFacts = [
    {
      icon: TrendingUp,
      stat: "23%",
      title: "ежегодный прирост трат",
      description: "на автоматизацию и AI-аналитику в крупных компаниях",
      source: "McKinsey, Gartner"
    },
    {
      icon: Target,
      title: "Доля компаний с AI",
      description: "2023 — только 7% | 2025 — уже 30% компаний среднего и крупного бизнеса",
      highlight: "Первыми выигрывают те, кто внедряет уже сейчас"
    },
    {
      icon: Globe,
      title: "Объём рынка",
      description: "Россия — более 20 млрд ₽ в 2023, потенциал x5 к 2028 году",
      description2: "Мировой рынок — $14 млрд в 2024, прогноз до $45 млрд в 2028"
    }
  ];

  return (
    <PresentationSlide slideNumber={11} background="gradient">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            AI-агенты и аналитика —
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">рынок, который взрывается прямо сейчас</span>
          </h1>
        </div>

        {/* Market facts */}
        <div className="max-w-6xl mx-auto space-y-8">
          {marketFacts.map((fact, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <fact.icon className="w-7 h-7 text-blue-600" />
                </div>
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-baseline space-x-4">
                    {fact.stat && (
                      <span className="text-4xl font-light text-blue-600">{fact.stat}</span>
                    )}
                    <h3 className="text-xl font-medium text-slate-900">{fact.title}</h3>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed">{fact.description}</p>
                  
                  {fact.description2 && (
                    <p className="text-slate-700 leading-relaxed">{fact.description2}</p>
                  )}
                  
                  {fact.source && (
                    <p className="text-sm text-slate-500 italic">Источник: {fact.source}</p>
                  )}
                  
                  {fact.highlight && (
                    <p className="text-blue-600 font-medium">→ {fact.highlight}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future impact */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 max-w-6xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-light text-white">Влияние на конкуренцию</h3>
            </div>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              "Через 1-2 года клиенты перестанут различать, человек или AI им звонит — 
              но выигрывают те, у кого скрипты, скорость и контроль на уровне AI."
            </p>
            
            <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl p-6 mt-8">
              <p className="text-xl text-cyan-400 font-medium text-center">
                Окно возможностей — 12–18 месяцев, потом это станет must-have для всех
              </p>
            </div>
          </div>
        </div>

        {/* Bottom conclusion */}
        <div className="text-center">
          <p className="text-2xl text-slate-700 font-light max-w-4xl mx-auto">
            Вы можете войти в новый стандарт продаж и клиентского сервиса — 
            <span className="text-blue-600 font-medium"> пока рынок только начинает меняться. Лидеры определяются сегодня.</span>
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default MarketSlide;
