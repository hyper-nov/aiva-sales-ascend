
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
      <div className="text-center space-y-8">
        {/* Logo/Brand area */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>
          </div>
          <EditableText
            as="span"
            className="text-3xl font-light text-slate-800 tracking-wider"
            isEditing={isEditMode}
            onSave={(text) => updateText('brand', text)}
          >
            {currentTexts.brand || 'AIVA'}
          </EditableText>
        </div>

        {/* Main title */}
        <div className="space-y-6">
          <EditableText
            as="h1"
            className="text-7xl font-extralight text-slate-900 leading-tight"
            isEditing={isEditMode}
            onSave={(text) => updateText('mainTitle', text)}
          >
            {currentTexts.mainTitle || 'Искусственный интеллект,'}
          </EditableText>
          
          <EditableText
            as="h1"
            className="text-7xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light"
            isEditing={isEditMode}
            onSave={(text) => updateText('subTitle', text)}
          >
            {currentTexts.subTitle || 'который продаёт'}
          </EditableText>
          
          <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-8"></div>
          
          <EditableText
            as="p"
            className="text-2xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed"
            isEditing={isEditMode}
            onSave={(text) => updateText('description', text)}
          >
            {currentTexts.description || 'Будущее эффективных продаж и клиентского сервиса уже сегодня'}
          </EditableText>
        </div>

        {/* Subtle accent elements */}
        <div className="flex justify-center items-center space-x-12 mt-16 opacity-60">
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <EditableText
              as="span"
              className="text-sm font-light"
              isEditing={isEditMode}
              onSave={(text) => updateText('feature1', text)}
            >
              {currentTexts.feature1 || 'AI-агенты'}
            </EditableText>
          </div>
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <EditableText
              as="span"
              className="text-sm font-light"
              isEditing={isEditMode}
              onSave={(text) => updateText('feature2', text)}
            >
              {currentTexts.feature2 || 'Голосовая аналитика'}
            </EditableText>
          </div>
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <EditableText
              as="span"
              className="text-sm font-light"
              isEditing={isEditMode}
              onSave={(text) => updateText('feature3', text)}
            >
              {currentTexts.feature3 || 'Автоматизация'}
            </EditableText>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableTitleSlide;
