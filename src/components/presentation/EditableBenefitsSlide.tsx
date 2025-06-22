import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { TrendingUp, Eye, DollarSign, Target, Zap } from 'lucide-react';
interface EditableBenefitsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}
const EditableBenefitsSlide = ({
  isEditMode = false,
  slideTexts = {},
  setSlideTexts
}: EditableBenefitsSlideProps) => {
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
  const benefits = [{
    icon: TrendingUp,
    stat: "+25%",
    title: "к конверсии лидов в продажи",
    description: "За счет того, что ни одна заявка не пропущена, каждый диалог контролируется"
  }, {
    icon: Eye,
    stat: "100%",
    title: "прозрачности и контроля",
    description: "Руководитель видит все переговоры и KPI в реальном времени"
  }, {
    icon: DollarSign,
    stat: "2x",
    title: "сокращение затрат",
    description: "Экономия ФОТ, отсутствие затрат на обучение, замену и текучку"
  }, {
    icon: Target,
    stat: "AI",
    title: "интерактивное обучение",
    description: "AI-коуч выявляет слабые стороны и даёт рекомендации в реальном времени"
  }, {
    icon: Zap,
    stat: "∞",
    title: "мгновенное масштабирование",
    description: "Добавление новых AI-агентов без поиска людей и перестройки процессов"
  }];
  return <PresentationSlide slideNumber={6} background="gradient">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <EditableText as="h1" className="text-5xl font-light text-slate-900 leading-tight" isEditing={isEditMode} onSave={text => updateText('title', text)}>
            {currentTexts.title || <>
                Что получает ваш бизнес уже в
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-normal">первый месяц работы с AIVA</span>
              </>}
          </EditableText>
        </div>

        {/* Timeline visualization */}
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-5 gap-4">
            {benefits.map((benefit, index) => <div key={index} className="relative">
                
              </div>)}
          </div>
        </div>

        {/* Bottom conclusion */}
        
      </div>
    </PresentationSlide>;
};
export default EditableBenefitsSlide;