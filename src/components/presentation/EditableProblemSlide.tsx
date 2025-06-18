
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';

interface EditableProblemSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableProblemSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableProblemSlideProps) => {
  const slideId = 'problem-slide';
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
    <PresentationSlide slideNumber={2} background="accent">
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <EditableText
            as="h1"
            className="text-6xl font-light text-slate-900 leading-tight"
            isEditing={isEditMode}
            onSave={(text) => updateText('title', text)}
          >
            {currentTexts.title || 'Глобальная проблема'}
          </EditableText>
          
          <EditableText
            as="p"
            className="text-2xl text-slate-600 font-light max-w-4xl mx-auto"
            isEditing={isEditMode}
            onSave={(text) => updateText('subtitle', text)}
          >
            {currentTexts.subtitle || 'Компании теряют миллионы из-за неэффективных продаж'}
          </EditableText>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <TrendingDown className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <EditableText
              as="h3"
              className="text-2xl font-semibold text-slate-800 mb-3"
              isEditing={isEditMode}
              onSave={(text) => updateText('stat1Title', text)}
            >
              {currentTexts.stat1Title || '70% потерь'}
            </EditableText>
            <EditableText
              as="p"
              className="text-slate-600 leading-relaxed"
              isEditing={isEditMode}
              onSave={(text) => updateText('stat1Desc', text)}
            >
              {currentTexts.stat1Desc || 'потенциальных клиентов теряется из-за плохого первого контакта'}
            </EditableText>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <EditableText
              as="h3"
              className="text-2xl font-semibold text-slate-800 mb-3"
              isEditing={isEditMode}
              onSave={(text) => updateText('stat2Title', text)}
            >
              {currentTexts.stat2Title || '80% времени'}
            </EditableText>
            <EditableText
              as="p"
              className="text-slate-600 leading-relaxed"
              isEditing={isEditMode}
              onSave={(text) => updateText('stat2Desc', text)}
            >
              {currentTexts.stat2Desc || 'менеджеры тратят на рутинные задачи вместо продаж'}
            </EditableText>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <EditableText
              as="h3"
              className="text-2xl font-semibold text-slate-800 mb-3"
              isEditing={isEditMode}
              onSave={(text) => updateText('stat3Title', text)}
            >
              {currentTexts.stat3Title || '$2.5 млн'}
            </EditableText>
            <EditableText
              as="p"
              className="text-slate-600 leading-relaxed"
              isEditing={isEditMode}
              onSave={(text) => updateText('stat3Desc', text)}
            >
              {currentTexts.stat3Desc || 'средние годовые потери компании из-за неэффективных процессов'}
            </EditableText>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableProblemSlide;
