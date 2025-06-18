
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Zap } from 'lucide-react';

const TitleSlide = () => {
  return (
    <PresentationSlide slideNumber={1} background="gradient">
      <div className="text-center space-y-8">
        {/* Logo/Brand area */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>
          </div>
          <span className="text-3xl font-light text-slate-800 tracking-wider">AIVA</span>
        </div>

        {/* Main title */}
        <div className="space-y-6">
          <h1 className="text-7xl font-extralight text-slate-900 leading-tight">
            Искусственный интеллект,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
              который продаёт
            </span>
          </h1>
          
          <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-8"></div>
          
          <p className="text-2xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
            Будущее эффективных продаж и клиентского сервиса уже сегодня
          </p>
        </div>

        {/* Subtle accent elements */}
        <div className="flex justify-center items-center space-x-12 mt-16 opacity-60">
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-light">AI-агенты</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-sm font-light">Голосовая аналитика</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <span className="text-sm font-light">Автоматизация</span>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default TitleSlide;
