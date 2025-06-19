
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { Zap } from 'lucide-react';

interface EditableTitleSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableTitleSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableTitleSlideProps) => {
  const slideId = 'title-slide';
  const currentTexts = slideTexts[slideId] || {};

  const updateText = (key: string, newText: string) => {
    if (setSlideTexts) {
      setSlideTexts({
        ...slideTexts,
        [slideId]: {
          ...currentTexts,
          [key]: newText
        }
      });
    }
  };

  return (
    <PresentationSlide slideNumber={1} background="gradient">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced futuristic background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/15 to-cyan-400/15 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-slate-800/25 to-blue-900/25 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-px h-48 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"></div>
          <div className="absolute top-1/3 right-1/3 w-36 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
          <div className="absolute bottom-1/3 left-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl"></div>
        </div>

        <div className="relative z-10 text-center space-y-16 max-w-7xl mx-auto px-8">
          {/* Enhanced Brand */}
          <div className="flex items-center justify-center space-x-8 mb-20">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] flex items-center justify-center shadow-2xl">
                <Zap className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur-lg opacity-30"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-[2rem] blur-2xl opacity-20"></div>
            </div>
            <EditableText
              as="span"
              className="text-6xl font-light text-slate-800 tracking-wide"
              isEditing={isEditMode}
              onSave={(text) => updateText('brand', text)}
            >
              {currentTexts.brand || 'AIVA'}
            </EditableText>
          </div>

          {/* Enhanced main title */}
          <div className="space-y-12">
            <EditableText
              as="h1"
              className="text-8xl font-extralight text-slate-900 leading-tight tracking-tight"
              isEditing={isEditMode}
              onSave={(text) => updateText('mainTitle', text)}
            >
              {currentTexts.mainTitle || 'Искусственный интеллект, который продаёт'}
            </EditableText>
            
            <div className="w-48 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto my-16 rounded-full"></div>
            
            <EditableText
              as="p"
              className="text-3xl text-slate-600 font-light max-w-5xl mx-auto leading-relaxed"
              isEditing={isEditMode}
              onSave={(text) => updateText('subtitle', text)}
            >
              {currentTexts.subtitle || 'Будущее эффективных продаж и клиентского сервиса уже сегодня'}
            </EditableText>
          </div>

          {/* Enhanced features with bigger icons */}
          <div className="flex justify-center items-center space-x-20 mt-24 opacity-80">
            <div className="flex flex-col items-center space-y-4 text-slate-600">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
              <span className="text-lg font-light">Голосовые AI-агенты</span>
            </div>
            <div className="flex flex-col items-center space-y-4 text-slate-600">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-lg"></div>
              <span className="text-lg font-light">Речевая аналитика</span>
            </div>
            <div className="flex flex-col items-center space-y-4 text-slate-600">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full shadow-lg"></div>
              <span className="text-lg font-light">Автоматизация</span>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableTitleSlide;
