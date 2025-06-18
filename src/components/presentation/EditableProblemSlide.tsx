
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { Clock, Users, Monitor, Star } from 'lucide-react';

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

  const problems = [
    {
      icon: Clock,
      stat: "22%",
      description: "времени менеджер реально продаёт",
      detail: "Всё остальное — отчёты, CRM, \"совещания\" и рутина"
    },
    {
      icon: Users,
      stat: "40%",
      description: "лидов теряются без единого звонка",
      detail: "\"Горячие\" заявки уходят конкурентам из-за очереди"
    },
    {
      icon: Monitor,
      stat: "52%",
      description: "разговоров — \"невидимки\"",
      detail: "Никто не анализирует — вы не знаете, где сливаются клиенты"
    },
    {
      icon: Star,
      stat: "20%",
      description: "клиентов бросают заявку",
      detail: "Только из-за ожидания ответа"
    }
  ];

  return (
    <PresentationSlide slideNumber={2} background="default">
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
                Как каждый день ваш бизнес
                <br />
                <span className="text-red-500 font-normal">теряет деньги</span>
              </>
            )}
          </EditableText>
          
          <EditableText
            as="p"
            className="text-xl text-slate-600 font-light"
            isEditing={isEditMode}
            onSave={(text) => updateText('subtitle', text)}
          >
            {currentTexts.subtitle || 'Факты, которые болят'}
          </EditableText>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-100/50">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                      <problem.icon className="w-7 h-7 text-red-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex items-baseline space-x-3">
                      <EditableText
                        as="span"
                        className="text-4xl font-light text-red-500"
                        isEditing={isEditMode}
                        onSave={(text) => updateText(`stat${index}`, text)}
                      >
                        {currentTexts[`stat${index}`] || problem.stat}
                      </EditableText>
                      <EditableText
                        as="span"
                        className="text-lg text-slate-700 font-light"
                        isEditing={isEditMode}
                        onSave={(text) => updateText(`description${index}`, text)}
                      >
                        {currentTexts[`description${index}`] || problem.description}
                      </EditableText>
                    </div>
                    <EditableText
                      as="p"
                      className="text-sm text-slate-700 leading-relaxed"
                      isEditing={isEditMode}
                      onSave={(text) => updateText(`detail${index}`, text)}
                    >
                      {currentTexts[`detail${index}`] || problem.detail}
                    </EditableText>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center">
          <EditableText
            as="p"
            className="text-xl text-slate-700 font-medium max-w-3xl mx-auto"
            isEditing={isEditMode}
            onSave={(text) => updateText('bottomText', text)}
          >
            {currentTexts.bottomText || (
              <>
                Только в этом месяце вы уже потеряли часть выручки, 
                <span className="text-red-500"> даже не зная об этом</span>
              </>
            )}
          </EditableText>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableProblemSlide;
