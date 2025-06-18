
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { Bot, Phone, Zap, Shield, BarChart3, Clock } from 'lucide-react';

interface EditableSolutionSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableSolutionSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableSolutionSlideProps) => {
  const slideId = 'solution-slide';
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

  const features = [
    {
      icon: Phone,
      title: "AI-агенты звонят сами",
      description: "Автоматические исходящие звонки каждому лиду в течение 30 секунд"
    },
    {
      icon: Bot,
      title: "Живое общение",
      description: "Голосовой AI неотличим от человека, ведёт естественный диалог"
    },
    {
      icon: Shield,
      title: "Никогда не устаёт",
      description: "Работает 24/7, обрабатывает сотни звонков одновременно"
    },
    {
      icon: BarChart3,
      title: "Полная аналитика",
      description: "Каждый разговор записан, проанализирован и структурирован"
    },
    {
      icon: Zap,
      title: "Мгновенное масштабирование",
      description: "Добавление новых AI-агентов за несколько кликов"
    },
    {
      icon: Clock,
      title: "Интеграция с CRM",
      description: "Автоматическое обновление данных клиентов и сделок"
    }
  ];

  return (
    <PresentationSlide slideNumber={4} background="gradient">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <EditableText
            as="h1"
            className="text-5xl font-light text-slate-900 leading-tight"
            isEditing={isEditMode}
            onSave={(text) => updateText('title', text)}
          >
            {currentTexts.title || (
              <>
                AIVA решает проблему
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">в корне</span>
              </>
            )}
          </EditableText>
          <EditableText
            as="p"
            className="text-xl text-slate-600 font-light"
            isEditing={isEditMode}
            onSave={(text) => updateText('subtitle', text)}
          >
            {currentTexts.subtitle || 'AI-отдел продаж, который работает лучше живых менеджеров'}
          </EditableText>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 h-full">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <EditableText
                    as="h3"
                    className="text-lg font-medium text-slate-900 leading-tight"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`featureTitle${index}`, text)}
                  >
                    {currentTexts[`featureTitle${index}`] || feature.title}
                  </EditableText>
                  
                  <EditableText
                    as="p"
                    className="text-sm text-slate-600 leading-relaxed"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`featureDescription${index}`, text)}
                  >
                    {currentTexts[`featureDescription${index}`] || feature.description}
                  </EditableText>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 text-center space-y-4">
            <EditableText
              as="h3"
              className="text-2xl font-light text-white"
              isEditing={isEditMode}
              onSave={(text) => updateText('bottomTitle', text)}
            >
              {currentTexts.bottomTitle || 'Результат: 0% потерянных лидов, 100% контроля процесса'}
            </EditableText>
            <EditableText
              as="p"
              className="text-lg text-slate-300 font-light max-w-3xl mx-auto"
              isEditing={isEditMode}
              onSave={(text) => updateText('bottomText', text)}
            >
              {currentTexts.bottomText || 'Ваши клиенты получают сервис мирового уровня, а вы — прозрачность и эффективность'}
            </EditableText>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableSolutionSlide;
