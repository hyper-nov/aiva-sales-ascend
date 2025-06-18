
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { DollarSign, Shield, TrendingDown, Gift } from 'lucide-react';

const PricingSlide = () => {
  const pricingPoints = [
    {
      icon: DollarSign,
      title: "Базовая подписка на AIVA",
      price: "от 2 500 000 ₽/год",
      description: "для отдела из 8–10 сотрудников",
      detail: "Всё включено: лицензия, поддержка, интеграция, обновления"
    },
    {
      icon: Shield,
      title: "Никаких скрытых платежей",
      description: "и непредсказуемых расходов",
      detail: "Платите только за реальные минуты работы и масштаб"
    },
    {
      icon: TrendingDown,
      title: "Стоимость минуты работы AI",
      description: "в 2–3 раза ниже человеческой",
      detail: "Неважно, сезон, рост нагрузки или отпуск — расходы всегда под контролем"
    },
    {
      icon: Gift,
      title: "Пилотный проект",
      description: "бесплатный аудит и расчет экономии",
      detail: "Вы ничего не теряете: сначала — цифры, потом — решение"
    }
  ];

  return (
    <PresentationSlide slideNumber={13} background="gradient">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            Сколько стоит переход в
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">новую эру продаж?</span>
          </h1>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPoints.map((point, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 group">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <point.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-slate-900">{point.title}</h3>
                    {point.price && (
                      <p className="text-lg text-blue-600 font-medium">{point.price}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-slate-700 font-medium">{point.description}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">→ {point.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison highlight */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 max-w-5xl mx-auto border border-blue-100">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h3 className="text-2xl font-light text-slate-700 mb-4">Человек</h3>
              <div className="space-y-2">
                <p className="text-lg text-slate-600">~200 ₽/минута разговора</p>
                <p className="text-sm text-slate-500">+ ФОТ, отпуска, больничные, обучение</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">AI</h3>
              <div className="space-y-2">
                <p className="text-lg text-blue-600 font-medium">~70 ₽/минута разговора</p>
                <p className="text-sm text-blue-500">Без дополнительных расходов</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom conclusion */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl font-light text-white">
              Вы платите меньше — а получаете больше продаж и контроля
            </h3>
            <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto">
              Ваша выгода — измеряется не затратами, а ростом прибыли и прозрачности. 
              <span className="text-purple-400 font-medium"> Начните экономить и управлять бизнесом уже в этом месяце.</span>
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default PricingSlide;
