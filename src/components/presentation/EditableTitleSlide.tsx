
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Bot, Zap, TrendingUp } from 'lucide-react';

const EditableTitleSlide = () => {
  return (
    <PresentationSlide slideNumber={1} background="gradient">
      <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">
              AIVA
            </span>
            <br />
            <span className="text-3xl sm:text-5xl lg:text-7xl">
              Искусственный интеллект,
              <br className="hidden sm:block" />
              который продаёт
            </span>
          </h1>
          
          <div className="w-24 sm:w-32 lg:w-48 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          
          <p className="text-lg sm:text-xl lg:text-3xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
            Будущее эффективных продаж и клиентского сервиса уже сегодня
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto pt-8 sm:pt-12 lg:pt-16">
          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto">
              <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-900">
                Голосовые AI-агенты
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                Автоматизация телефонных и онлайн продаж
              </p>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-900">
                Речевая аналитика
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                AI анализ всех диалогов в CRM
              </p>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-900">
                Рост эффективности
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                До 300% увеличение конверсии
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableTitleSlide;
