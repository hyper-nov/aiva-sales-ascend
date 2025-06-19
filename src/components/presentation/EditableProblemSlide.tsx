
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { Clock, Users, Monitor, AlertTriangle } from 'lucide-react';

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
      detail: "\"Горячие\" заявки уходят конкурентам из-за очереди и нехватки рук"
    },
    {
      icon: Monitor,
      stat: "52%",
      description: "разговоров — \"невидимки\"",
      detail: "Никто не анализирует: вы не знаете, где сливаются клиенты"
    },
    {
      icon: AlertTriangle,
      stat: "20%",
      description: "клиентов бросают заявку",
      detail: "Каждый 5-й клиент бросает заявку из-за ожидания ответа"
    }
  ];

  return (
    <PresentationSlide slideNumber={2} background="default">
      <div className="relative min-h-screen py-16 overflow-hidden">
        {/* Futuristic background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 right-32 w-72 h-72 rounded-full bg-gradient-to-r from-slate-800/10 to-blue-900/10 blur-3xl"></div>
          <div className="absolute bottom-32 left-32 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/5 to-cyan-400/5 blur-3xl"></div>
          <div className="absolute top-1/4 left-12 w-px h-24 bg-gradient-to-b from-transparent via-slate-400/20 to-transparent"></div>
          <div className="absolute bottom-1/4 right-12 w-20 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-16 max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center space-y-6">
            <EditableText
              as="h1"
              className="text-5xl font-light text-slate-900 leading-tight"
              isEditing={isEditMode}
              onSave={(text) => updateText('title', text)}
            >
              {currentTexts.title || 'Как каждый день ваш бизнес теряет деньги — факты, которые болят'}
            </EditableText>
          </div>

          {/* Problems grid */}
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-slate-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50">
                  {/* Subtle accent line */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                        <problem.icon className="w-7 h-7 text-slate-600" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <div className="flex items-baseline space-x-3">
                        <EditableText
                          as="span"
                          className="text-4xl font-light text-slate-700"
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
                        className="text-sm text-slate-600 leading-relaxed"
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
              {currentTexts.bottomText || 'Только в этом месяце вы уже потеряли часть выручки, даже не зная об этом'}
            </EditableText>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableProblemSlide;
