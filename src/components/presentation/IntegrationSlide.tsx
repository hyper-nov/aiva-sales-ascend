
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Play, Search, Settings, Rocket, CheckCircle } from 'lucide-react';

const IntegrationSlide = () => {
  const steps = [
    {
      icon: Play,
      title: "Заявка или звонок",
      duration: "1 день",
      description: "Минимум бюрократии. Всё общение \"на одном языке\" с вашим бизнесом"
    },
    {
      icon: Search,
      title: "Анализ бизнес-процессов",
      duration: "3–5 дней",
      description: "Мы понимаем, как работает ваш отдел продаж, не тратя ваше время"
    },
    {
      icon: Settings,
      title: "Интеграция в CRM и тестирование",
      duration: "10–14 дней",
      description: "Встраиваемся в текущие системы, не требуем перестройки бизнеса"
    },
    {
      icon: Rocket,
      title: "Запуск пилота",
      duration: "2,5-3 недели",
      description: "Первые результаты и отчеты вы видите сразу, в реальном времени"
    },
    {
      icon: CheckCircle,
      title: "Полный запуск и масштабирование",
      duration: "1-1,5 месяца",
      description: "Поддержка на всех этапах, \"ручное\" сопровождение, чтобы вы не потеряли ни дня"
    }
  ];

  return (
    <PresentationSlide slideNumber={12} background="default">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            Внедрить AIVA проще,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-normal">чем заменить сотрудника</span>
          </h1>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-20 bottom-32 w-0.5 bg-gradient-to-b from-blue-200 via-cyan-300 to-blue-400"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full z-10"></div>
                
                {/* Step content */}
                <div className="grid grid-cols-2 gap-16 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="text-right">
                        <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-200/50 max-w-lg">
                          <div className="flex items-center justify-end space-x-4 mb-4">
                            <div className="text-right">
                              <h3 className="text-lg font-medium text-slate-900">{step.title}</h3>
                              <p className="text-sm text-blue-600 font-medium">{step.duration}</p>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                              <step.icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <p className="text-sm text-slate-700 text-right">{step.description}</p>
                        </div>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div className="text-left">
                        <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-200/50 max-w-lg">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                              <step.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-slate-900">{step.title}</h3>
                              <p className="text-sm text-blue-600 font-medium">{step.duration}</p>
                            </div>
                          </div>
                          <p className="text-sm text-slate-700">{step.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl font-light text-white">
              Весь процесс занимает не больше месяца
            </h3>
            <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto">
              Без рисков, простоев и стресса для вашего бизнеса. Всё под ключ, максимум под вашу специфику.
            </p>
            <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl p-4 mt-6">
              <p className="text-xl text-cyan-400 font-medium">
                Ваш бизнес начинает экономить и расти уже в первый месяц
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default IntegrationSlide;
