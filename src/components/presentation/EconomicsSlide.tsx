
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
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-normal">сколько ваш бизнес экономит с AIVA</span>
          </h1>
        </div>

        {/* Modern comparison layout */}
        <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Before AIVA */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-light text-slate-700 mb-4">До AIVA</h2>
              <div className="w-full h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 space-y-6">
              {beforeCosts.map((cost, index) => (
                <div key={index} className="flex justify-between items-start group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
                  <span className="text-sm text-slate-700 flex-1 pr-4 leading-relaxed">{cost.item}:</span>
                  <span className="text-lg font-medium text-slate-800 whitespace-nowrap">
                    {formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽
                  </span>
                </div>
              ))}
              
              <div className="border-t border-slate-300 pt-6">
                <div className="flex justify-between items-center bg-white/70 rounded-2xl p-4">
                  <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
                  <span className="text-2xl font-bold text-slate-800">
                    {formatNumber(totalBefore)} ₽/год
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* After AIVA */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-light text-slate-700 mb-4">С AIVA</h2>
              <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 space-y-6">
              {afterCosts.map((cost, index) => (
                <div key={index} className="flex justify-between items-start group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
                  <span className="text-sm text-slate-700 flex-1 pr-4 leading-relaxed">{cost.item}:</span>
                  <span className="text-lg font-medium text-blue-700 whitespace-nowrap">
                    {cost.amount === "0" ? "0 ₽" : `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽`}
                  </span>
                </div>
              ))}
              
              <div className="border-t border-blue-200 pt-6">
                <div className="flex justify-between items-center bg-gradient-to-r from-blue-100/70 to-cyan-100/70 rounded-2xl p-4">
                  <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {formatNumber(totalAfter)} ₽/год
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Savings highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-8 border border-slate-700 relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
            <div className="relative z-10 text-center space-y-4">
              <h3 className="text-3xl font-light text-white">
                Экономия до <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{formatNumber(savings)} ₽/год</span>
              </h3>
              <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
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
