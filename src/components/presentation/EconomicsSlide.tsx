
import React from 'react';
import PresentationSlide from '../PresentationSlide';

const EconomicsSlide = () => {
  const beforeCosts = [
    { item: "ФОТ отдела (8 менеджеров)", amount: "12 000 000" },
    { item: "Потери на текучку и обучение", amount: "1 200 000" },
    { item: "Потери от \"невидимых\" лидов", amount: "3 000 000" },
    { item: "Прочие расходы (отпуска, больничные)", amount: "900 000" }
  ];

  const afterCosts = [
    { item: "Подписка на платформу AIVA", amount: "2 500 000" },
    { item: "Дополнительные операционные издержки", amount: "0" },
    { item: "Пропущенные лиды", amount: "0" },
    { item: "Контроль без доп. зарплат", amount: "0" }
  ];

  const totalBefore = beforeCosts.reduce((sum, cost) => sum + parseInt(cost.amount.replace(/\s/g, '')), 0);
  const totalAfter = afterCosts.reduce((sum, cost) => sum + parseInt(cost.amount.replace(/\s/g, '')), 0);
  const savings = totalBefore - totalAfter;

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <PresentationSlide slideNumber={5} background="default">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            Честная математика:
            <br />
            <span className="text-green-600 font-normal">сколько ваш бизнес экономит с AIVA</span>
          </h1>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Before AIVA */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-light text-red-600 mb-4">До AIVA</h2>
              <div className="w-full h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
            </div>
            
            <div className="bg-red-50/50 backdrop-blur-sm rounded-2xl p-6 border border-red-100 space-y-4">
              {beforeCosts.map((cost, index) => (
                <div key={index} className="flex justify-between items-start">
                  <span className="text-sm text-slate-700 flex-1 pr-4">{cost.item}:</span>
                  <span className="text-lg font-medium text-red-600 whitespace-nowrap">
                    {formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽
                  </span>
                </div>
              ))}
              
              <div className="border-t border-red-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
                  <span className="text-2xl font-bold text-red-600">
                    {formatNumber(totalBefore)} ₽/год
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl">→</div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-20"></div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm font-medium text-green-600">ЭКОНОМИЯ</p>
              </div>
            </div>
          </div>

          {/* After AIVA */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-light text-green-600 mb-4">С AIVA</h2>
              <div className="w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </div>
            
            <div className="bg-green-50/50 backdrop-blur-sm rounded-2xl p-6 border border-green-100 space-y-4">
              {afterCosts.map((cost, index) => (
                <div key={index} className="flex justify-between items-start">
                  <span className="text-sm text-slate-700 flex-1 pr-4">{cost.item}:</span>
                  <span className="text-lg font-medium text-green-600 whitespace-nowrap">
                    {cost.amount === "0" ? "0 ₽" : `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽`}
                  </span>
                </div>
              ))}
              
              <div className="border-t border-green-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatNumber(totalAfter)} ₽/год
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Savings highlight */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 border border-green-200">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-light text-slate-900">
                Экономия до <span className="text-4xl font-bold text-green-600">{formatNumber(savings)} ₽/год</span>
              </h3>
              <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                AIVA не просто дешевле, она сразу же приносит дополнительную прибыль 
                за счет роста эффективности
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EconomicsSlide;
