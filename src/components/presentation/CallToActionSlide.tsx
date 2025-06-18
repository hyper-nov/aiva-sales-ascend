
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { ArrowRight, Phone, Calendar, Mail } from 'lucide-react';

const CallToActionSlide = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Звонок",
      subtitle: "Обсудить ваш проект",
      action: "+7 (XXX) XXX-XX-XX"
    },
    {
      icon: Calendar,
      title: "Встреча",
      subtitle: "Демонстрация решения",
      action: "Забронировать слот"
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Получить презентацию",
      action: "hello@aiva.ru"
    }
  ];

  return (
    <PresentationSlide slideNumber={15} background="gradient">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-light text-slate-900 leading-tight">
            Начните экономить
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">уже сегодня</span>
          </h1>
          
          <div className="w-32 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          
          <p className="text-2xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
            Получите бесплатный аудит вашего отдела продаж и персональный расчет экономии с AIVA
          </p>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-3xl font-light text-white">
              Пилотный проект — <span className="text-cyan-400 font-medium">бесплатно</span>
            </h2>
            
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-cyan-400 font-bold text-lg">1</span>
                </div>
                <p className="text-slate-300 text-sm">Анализ текущих процессов</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-cyan-400 font-bold text-lg">2</span>
                </div>
                <p className="text-slate-300 text-sm">Расчет точной экономии</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-cyan-400 font-bold text-lg">3</span>
                </div>
                <p className="text-slate-300 text-sm">Демонстрация результатов</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl p-6">
              <p className="text-xl text-white font-light">
                Узнайте точно, сколько вы сэкономите и заработаете с AIVA —
                <span className="text-cyan-400 font-medium"> без обязательств</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-slate-900">{method.title}</h3>
                    <p className="text-sm text-slate-600">{method.subtitle}</p>
                    <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                      {method.action}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency message */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-4xl mx-auto border border-blue-100">
          <div className="flex items-center justify-center space-x-3">
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <p className="text-lg text-slate-700 font-light">
              Каждый день промедления — это потерянная прибыль. 
              <span className="text-blue-600 font-medium"> Начните экономить прямо сейчас</span>
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default CallToActionSlide;
