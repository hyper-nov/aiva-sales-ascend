
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
      <div className="relative w-full h-auto flex items-center justify-center py-16">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-48 h-48 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-400/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-slate-800/20 to-blue-900/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-px h-24 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center space-y-16 max-w-6xl mx-auto px-8">
          {/* Brand */}
          <div className="flex items-center justify-center space-x-8 mb-16">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl flex items-center justify-center">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20"></div>
            </div>
            <EditableText
              as="span"
              className="text-5xl font-light text-slate-800 tracking-wider"
              isEditing={isEditMode}
              onSave={(text) => updateText('brand', text)}
            >
              {currentTexts.brand || 'AIVA'}
            </EditableText>
          </div>

          {/* Main title */}
          <div className="space-y-12">
            <EditableText
              as="h1"
              className="text-8xl font-extralight text-slate-900 leading-tight"
              isEditing={isEditMode}
              onSave={(text) => updateText('mainTitle', text)}
            >
              {currentTexts.mainTitle || 'Искусственный интеллект, который продаёт'}
            </EditableText>
            
            <div className="w-40 h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto my-16"></div>
            
            <EditableText
              as="p"
              className="text-3xl text-slate-600 font-light max-w-5xl mx-auto leading-relaxed"
              isEditing={isEditMode}
              onSave={(text) => updateText('subtitle', text)}
            >
              {currentTexts.subtitle || 'Будущее эффективных продаж и клиентского сервиса уже сегодня'}
            </EditableText>
          </div>

          {/* Features */}
          <div className="flex justify-center items-center space-x-20 mt-24 opacity-70">
            <div className="flex items-center space-x-4 text-slate-500">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              <span className="text-lg font-light">Голосовые AI-агенты</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-500">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
              <span className="text-lg font-light">Речевая аналитика</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-500">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full"></div>
              <span className="text-lg font-light">Автоматизация</span>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableTitleSlide;
