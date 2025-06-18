
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Heart, Users, Headphones } from 'lucide-react';

const HumanitySlide = () => {
  return (
    <PresentationSlide slideNumber={9} background="default">
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center space-y-12 max-w-5xl mx-auto">
          {/* Main message */}
          <div className="space-y-8">
            <div className="flex justify-center space-x-8 mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <Headphones className="w-8 h-8 text-cyan-600" />
              </div>
            </div>

            <h1 className="text-5xl font-light text-slate-900 leading-tight">
              От возражения к
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">уверенному будущему</span>
            </h1>
            
            <div className="w-32 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-12"></div>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-2xl text-slate-700 font-light leading-relaxed">
                AIVA — не просто робот, а 
                <span className="text-blue-600 font-medium"> "новый сотрудник"</span>, 
                который слушает, понимает, не устает и уважает каждого клиента.
              </p>
              
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Вы не потеряете "человечность" — вы наконец-то сможете 
                <span className="text-purple-600 font-medium"> ее контролировать и масштабировать</span>.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-16 mt-16 opacity-40">
            <div className="flex items-center space-x-3 text-slate-500">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-light">Эмпатия</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-500">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-light">Понимание</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-500">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-sm font-light">Профессионализм</span>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default HumanitySlide;
