
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Clock, Users, Monitor, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useIsMobile } from '../../hooks/use-mobile';
import EditableText from '../EditableText';

interface EditableProblemSl ideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableProblemSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableProblemSlideProps) => {
  const isMobile = useIsMobile();
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

  const ProblemCard = ({ problem, index }) => (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/50 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-100/50 h-full">
      <div className="space-y-4 sm:space-y-6">
        {/* Mobile: stat and icon in row, desktop: column */}
        <div className="flex items-center space-x-4 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300 flex-shrink-0">
            <problem.icon className="w-8 h-8 text-red-500" />
          </div>
          <EditableText
            as="div"
            className="text-4xl sm:text-5xl font-light text-red-500"
            isEditing={isEditMode}
            onSave={(text) => updateText(`stat${index}`, text)}
          >
            {currentTexts[`stat${index}`] || problem.stat}
          </EditableText>
        </div>
        
        <div className="space-y-3">
          <EditableText
            as="div"
            className="text-lg sm:text-xl text-slate-700 font-light"
            isEditing={isEditMode}
            onSave={(text) => updateText(`description${index}`, text)}
          >
            {currentTexts[`description${index}`] || problem.description}
          </EditableText>
          <EditableText
            as="p"
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
            isEditing={isEditMode}
            onSave={(text) => updateText(`detail${index}`, text)}
          >
            {currentTexts[`detail${index}`] || problem.detail}
          </EditableText>
        </div>
      </div>
    </div>
  );

  return (
    <PresentationSlide slideNumber={2} background="default">
      <div className="w-full h-auto py-8 sm:py-16 space-y-12 sm:space-y-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-8">
          <EditableText
            as="h1"
            className="text-3xl sm:text-4xl lg:text-6xl font-light text-slate-900 leading-tight"
            isEditing={isEditMode}
            onSave={(text) => updateText('title', text)}
          >
            {currentTexts.title || "Как каждый день ваш бизнес теряет деньги"}
          </EditableText>
          <EditableText
            as="p"
            className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light"
            isEditing={isEditMode}
            onSave={(text) => updateText('subtitle', text)}
          >
            {currentTexts.subtitle || "Факты, которые болят"}
          </EditableText>
        </div>

        {/* Problems - responsive */}
        {isMobile ? (
          <div className="max-w-sm mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {problems.map((problem, index) => (
                  <CarouselItem key={index}>
                    <ProblemCard problem={problem} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="group">
                <ProblemCard problem={problem} index={index} />
              </div>
            ))}
          </div>
        )}

        {/* Bottom accent */}
        <div className="text-center pt-4 sm:pt-8">
          <EditableText
            as="p"
            className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium max-w-4xl mx-auto"
            isEditing={isEditMode}
            onSave={(text) => updateText('bottomText', text)}
          >
            {currentTexts.bottomText || "Только в этом месяце вы уже потеряли часть выручки, даже не зная об этом"}
          </EditableText>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableProblemSlide;
