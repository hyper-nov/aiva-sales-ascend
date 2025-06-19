
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
      detail: "Никто не анализирует 52% разговоров: вы не знаете, где сливаются клиенты"
    },
    {
      icon: AlertTriangle,
      stat: "20%",
      description: "клиентов бросают заявку из-за ожидания ответа",
      detail: "Только в этом месяце вы уже потеряли часть выручки, даже не зная об этом"
    }
  ];

  return (
    <PresentationSlide slideNumber={2} background="default">
      <div className="relative min-h-screen py-20 overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-32 w-96 h-96 rounded-full bg-gradient-to-r from-slate-800/15 to-blue-900/15 blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-400/10 blur-3xl"></div>
          
          {/* Elegant lines */}
          <div className="absolute top-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute bottom-1/3 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-20 max-w-7xl mx-auto px-8">
          {/* Enhanced header */}
          <div className="text-center space-y-8">
            <EditableText
              as="h1"
              className="text-7xl font-light text-slate-900 leading-tight"
              isEditing={isEditMode}
              onSave={(text) => updateText('title', text)}
            >
              {currentTexts.title || 'Как каждый день ваш бизнес теряет деньги — факты, которые болят'}
            </EditableText>
          </div>

          {/* Enhanced problems grid */}
          <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/60 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-100/50">
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300 shadow-lg">
                        <problem.icon className="w-10 h-10 text-slate-600" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div className="flex items-baseline space-x-4">
                        <EditableText
                          as="span"
                          className="text-6xl font-light text-slate-700"
                          isEditing={isEditMode}
                          onSave={(text) => updateText(`stat${index}`, text)}
                        >
                          {currentTexts[`stat${index}`] || problem.stat}
                        </EditableText>
                        <EditableText
                          as="span" 
                          className="text-2xl text-slate-700 font-light leading-tight"
                          isEditing={isEditMode}
                          onSave={(text) => updateText(`description${index}`, text)}
                        >
                          {currentTexts[`description${index}`] || problem.description}
                        </EditableText>
                      </div>
                      <EditableText
                        as="p"
                        className="text-lg text-slate-600 leading-relaxed"
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
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableProblemSlide;
