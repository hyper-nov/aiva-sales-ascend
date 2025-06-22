
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { TrendingUp, Users, Target, BarChart3, Brain, CheckCircle } from 'lucide-react';

const AutomationProcessesBlock = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const processAdvantages = [
    {
      icon: TrendingUp,
      title: "Раннее выявление точек роста",
      description: "AI анализирует каждый разговор и выявляет скрытые возможности для увеличения продаж",
      benefits: [
        "Обнаружение неочевидных потребностей клиентов",
        "Выявление трендов в поведении покупателей",
        "Прогнозирование спроса на продукты/услуги"
      ]
    },
    {
      icon: Users,
      title: "Методичное повышение квалификации",
      description: "Система автоматически анализирует работу каждого сотрудника и дает персональные рекомендации",
      benefits: [
        "Индивидуальные программы развития для каждого менеджера",
        "Постоянный мониторинг прогресса обучения",
        "Автоматическое выявление пробелов в знаниях"
      ]
    },
    {
      icon: Target,
      title: "Непрерывная оптимизация процессов",
      description: "AIVA постоянно совершенствует ваши бизнес-процессы на основе данных",
      benefits: [
        "Автоматическое A/B тестирование скриптов продаж",
        "Оптимизация времени обработки заявок",
        "Улучшение маршрутизации клиентов"
      ]
    },
    {
      icon: BarChart3,
      title: "Предиктивная аналитика",
      description: "Система предсказывает результаты и помогает принимать решения заранее",
      benefits: [
        "Прогнозирование объемов продаж",
        "Предупреждение о рисках потери клиентов",
        "Планирование нагрузки на отдел продаж"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-slate-900 mb-6 sm:mb-8 leading-tight">
            Автоматизированные процессы,
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">
              которые принуждают ваш бизнес становиться лучше
            </span>
          </h2>
          
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed px-4">
            AIVA не просто автоматизирует продажи — она создает самообучающуюся экосистему, 
            которая заставляет ваш бизнес постоянно совершенствоваться
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {processAdvantages.map((process, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 h-full">
                <div className="space-y-4 sm:space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <process.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900 leading-tight">
                    {process.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {process.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                    {process.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700 relative overflow-hidden cursor-pointer group"
          onClick={() => setModalOpen(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
          
          <div className="relative z-10 text-center space-y-6 sm:space-y-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto">
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
              Узнайте, как AIVA может 
              <span className="text-cyan-400 font-medium"> трансформировать ваш бизнес</span>
            </h3>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Получите персональный анализ вашего отдела продаж и узнайте, 
              какие процессы можно автоматизировать уже сегодня
            </p>
            
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-300">
              <span className="text-lg sm:text-xl text-white font-medium">
                Получить консультацию
              </span>
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type="meeting" 
      />
    </div>
  );
};

export default AutomationProcessesBlock;
