
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { CheckCircle, XCircle, Clock, Users, Zap, Shield, BarChart } from 'lucide-react';

const ComparisonSlide = () => {
  const comparisons = [
    {
      icon: CheckCircle,
      aiva: "Не теряет ни одного лида",
      aivaDetail: "100% заявок обработаны, 24/7",
      classic: "Пропуски, \"зависание\" в очередях",
      classicDetail: "Человеческий фактор, усталость"
    },
    {
      icon: Shield,
      aiva: "Не ошибается и не забывает",
      aivaDetail: "Точный, не устает, всегда в тонусе",
      classic: "Человеческий фактор, усталость",
      classicDetail: "Субъективные оценки, эмоции"
    },
    {
      icon: Zap,
      aiva: "Быстро масштабируется",
      aivaDetail: "Добавление новых \"агентов\" за 1 клик",
      classic: "Месяцы найма, адаптации, обучения",
      classicDetail: "Сложный HR-процесс"
    },
    {
      icon: BarChart,
      aiva: "Мгновенный контроль и прозрачность",
      aivaDetail: "Вся аналитика онлайн, без \"черных ящиков\"",
      classic: "Проверки вручную, субъективные оценки",
      classicDetail: "Непрозрачность процессов"
    },
    {
      icon: Users,
      aiva: "Экономит миллионы в год",
      aivaDetail: "В 2–3 раза дешевле при большем охвате",
      classic: "Рост ФОТ, оплата простоев, текучка",
      classicDetail: "Постоянные доп. расходы"
    }
  ];

  return (
    <PresentationSlide slideNumber={7} background="default">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            Почему AI-отдел продаж
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">эффективнее обычного?</span>
          </h1>
        </div>

        {/* Comparison grid */}
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header row */}
          <div className="grid grid-cols-2 gap-12 mb-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-6 border border-blue-200">
                <h2 className="text-2xl font-light bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AIVA</h2>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-6 border border-slate-300">
                <h2 className="text-2xl font-light text-slate-600">Классический отдел</h2>
              </div>
            </div>
          </div>

          {/* Comparison rows */}
          {comparisons.map((comparison, index) => (
            <div key={index} className="grid grid-cols-2 gap-12 items-center">
              {/* AIVA side */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <comparison.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-slate-900">{comparison.aiva}</h3>
                    <p className="text-sm text-blue-700">{comparison.aivaDetail}</p>
                  </div>
                </div>
              </div>

              {/* Classic side */}
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-slate-700">{comparison.classic}</h3>
                    <p className="text-sm text-slate-600">{comparison.classicDetail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom conclusion */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
          <p className="text-xl text-slate-700 font-light">
            AIVA не заменяет людей, а помогает бизнесу расти 
            <span className="text-blue-600 font-medium"> без ограничений, затрат и стресса</span>
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default ComparisonSlide;
