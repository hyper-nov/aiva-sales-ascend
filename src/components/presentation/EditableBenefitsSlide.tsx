
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { TrendingUp, Eye, DollarSign, Target, Zap } from 'lucide-react';

interface EditableBenefitsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableBenefitsSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableBenefitsSlideProps) => {
  const slideId = 'benefits-slide';
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

  const benefits = [
    {
      icon: TrendingUp,
      stat: "+25%",
      title: "к конверсии лидов в продажи",
      description: "За счет того, что ни одна заявка не пропущена, каждый диалог контролируется"
    },
    {
      icon: Eye,
      stat: "100%",
      title: "прозрачности и контроля",
      description: "Руководитель видит все переговоры и KPI в реальном времени"
    },
    {
      icon: DollarSign,
      stat: "2x",
      title: "сокращение затрат",
      description: "Экономия ФОТ, отсутствие затрат на обучение, замену и текучку"
    },
    {
      icon: Target,
      stat: "AI",
      title: "интерактивное обучение",
      description: "AI-коуч выявляет слабые стороны и даёт рекомендации в реальном времени"
    },
    {
      icon: Zap,
      stat: "∞",
      title: "мгновенное масштабирование",
      description: "Добавление новых AI-агентов без поиска людей и перестройки процессов"
    }
  ];

  return (
    <PresentationSlide slideNumber={6} background="gradient">
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
                Что получает ваш бизнес уже в
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-normal">первый месяц работы с AIVA</span>
              </>
            )}
          </EditableText>
        </div>

        {/* Timeline visualization */}
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-5 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 group">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <div className="space-y-2">
                      <EditableText
                        as="div"
                        className="text-3xl font-light bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                        isEditing={isEditMode}
                        onSave={(text) => updateText(`stat${index}`, text)}
                      >
                        {currentTexts[`stat${index}`] || benefit.stat}
                      </EditableText>
                      <EditableText
                        as="h3"
                        className="text-sm font-medium text-slate-900 leading-tight"
                        isEditing={isEditMode}
                        onSave={(text) => updateText(`title${index}`, text)}
                      >
                        {currentTexts[`title${index}`] || benefit.title}
                      </EditableText>
                      <EditableText
                        as="p"
                        className="text-xs text-slate-600 leading-relaxed"
                        isEditing={isEditMode}
                        onSave={(text) => updateText(`description${index}`, text)}
                      >
                        {currentTexts[`description${index}`] || benefit.description}
                      </EditableText>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom conclusion */}
        <div className="text-center bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative z-10">
            <EditableText
              as="p"
              className="text-xl text-white font-light max-w-4xl mx-auto"
              isEditing={isEditMode}
              onSave={(text) => updateText('bottomText', text)}
            >
              {currentTexts.bottomText || (
                <>
                  Ваш бизнес начинает зарабатывать больше, тратить меньше и видеть всё насквозь — 
                  <span className="text-cyan-400 font-medium"> без сложного внедрения и долгих "танцев" с персоналом</span>
                </>
              )}
            </EditableText>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableBenefitsSlide;
