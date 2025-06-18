
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Building2, Smartphone, ShoppingCart, Shield, Monitor } from 'lucide-react';

const SegmentsSlide = () => {
  const segments = [
    {
      icon: Building2,
      title: "Банки и финансы",
      description: "Сотни тысяч звонков в день, мгновенная обработка лидов, единый стандарт качества коммуникаций"
    },
    {
      icon: Smartphone,
      title: "Telecom и операторы связи",
      description: "Входящий и исходящий обзвон, upsell, удержание абонентов, снижение нагрузки на сотрудников"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce и крупный ритейл",
      description: "Поддержка клиентов 24/7, автоматизация повторных продаж, upsell, оперативная обработка заказов и вопросов"
    },
    {
      icon: Shield,
      title: "Страховые компании",
      description: "Массовая обработка заявок, снижение времени на решение вопроса клиента, отсутствие \"мертвых\" звонков"
    },
    {
      icon: Monitor,
      title: "IT и B2B-сервисы",
      description: "Сложные переговоры по скриптам, контроль качества коммуникаций с корпоративными клиентами"
    }
  ];

  return (
    <PresentationSlide slideNumber={10} background="default">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            Где AIVA приносит
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-normal">максимальный результат?</span>
          </h1>
        </div>

        {/* Segments grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          {segments.map((segment, index) => (
            <div key={index} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <segment.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-light text-slate-900">{segment.title}</h3>
                    <p className="text-slate-700 leading-relaxed text-lg">{segment.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-2 h-16 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual accent */}
        <div className="flex justify-center space-x-4 mt-12">
          {segments.map((_, index) => (
            <div key={index} className="w-2 h-2 bg-blue-300 rounded-full"></div>
          ))}
        </div>
      </div>
    </PresentationSlide>
  );
};

export default SegmentsSlide;
