
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { User, Bot, Phone, Clock, Heart, Zap } from 'lucide-react';

const HumanVsAiSlide = () => {
  return (
    <PresentationSlide slideNumber={8} background="gradient">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-slate-900 leading-tight">
            Живой голос, живые продажи —
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">но без ограничений "человека"</span>
          </h1>
        </div>

        {/* Main comparison */}
        <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Human Manager */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mb-6">
                <User className="w-12 h-12 text-slate-600" />
              </div>
              <h2 className="text-2xl font-light text-slate-700">Менеджер сегодня</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">В среднем говорит с клиентами 3 часа из 8</h3>
                    <p className="text-sm text-slate-600">Остальное — поиск данных, CRM, ожидания, совещания</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">50–60 звонков в день</h3>
                    <p className="text-sm text-slate-600">Дальше — усталость, ошибки, перерывы, "выгорел"</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Не каждый разговор "в тему"</h3>
                    <p className="text-sm text-slate-600">Может "впаривать", быть невежливым или не попасть в эмоцию клиента</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agent */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6">
                <Bot className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AIVA — AI-агент</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">120–200 звонков в день без усталости</h3>
                    <p className="text-sm text-blue-700">Одновременно может вести десятки диалогов</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Всегда вежлив, слышит клиента</h3>
                    <p className="text-sm text-blue-700">Умеет говорить "по-человечески", без скриптового сухаря и агрессии</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Каждый лид — на контроле</h3>
                    <p className="text-sm text-blue-700">Нет "забытых" клиентов, "нервных" звонков или ошибок из-за настроения</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future insight */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl font-light text-white">
              Через год большая часть звонков будет совершаться AI-агентами
            </h3>
            <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto">
              Лидеры рынка уже внедряют такие решения — пока ваши конкуренты только думают, 
              <span className="text-purple-400 font-medium"> вы получаете преимущество</span>
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default HumanVsAiSlide;
