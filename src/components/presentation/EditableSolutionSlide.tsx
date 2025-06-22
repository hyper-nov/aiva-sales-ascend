
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';
import { Monitor, Zap, Shield, Star, TrendingUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useIsMobile } from '../../hooks/use-mobile';

interface EditableSolutionSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableSolutionSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableSolutionSlideProps) => {
  const isMobile = useIsMobile();
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

  const benefits = [
    {
      icon: Monitor,
      title: "Спокойствие за ключевые деньги",
      description: "Все сделки и обращения видны в реальном времени",
      result: "Ни один \"рубль\" не теряется в хаосе"
    },
    {
      icon: Zap,
      title: "Свобода от текучки и рутин",
      description: "Автоматизация до 80% \"бумажной\" работы и контроля",
      result: "Ваши люди делают только то, что действительно важно"
    },
    {
      icon: Shield,
      title: "Гибкость и масштабируемость",
      description: "Система сама растёт под ваш бизнес, не требует HR и найма \"в аврале\"",
      result: "Быстрое масштабирование без головной боли"
    },
    {
      icon: Star,
      title: "Личная жизнь без стресса",
      description: "Нет ежедневного \"тушения пожаров\" — вы управляете, а не спасаете бизнес",
      result: "Возвращаете себе спокойствие"
    }
  ];

  const realBenefits = [
    {
      metric: "+25%",
      title: "к конверсии лидов в продажи",
      description: "За счет того, что ни одна заявка не пропущена, каждый диалог контролируется"
    },
    {
      metric: "100%",
      title: "прозрачности и контроля",
      description: "Руководитель видит все переговоры и KPI в реальном времени"
    },
    {
      metric: "2x",
      title: "сокращение затрат",
      description: "Экономия ФОТ, отсутствие затрат на обучение, замену и текучку"
    },
    {
      metric: "AI",
      title: "интерактивное обучение",
      description: "AI-коуч выявляет слабые стороны и даёт рекомендации в реальном времени"
    },
    {
      metric: "∞",
      title: "мгновенное масштабирование",
      description: "Добавление новых AI-агентов без поиска людей и перестройки процессов"
    }
  ];

  // Группируем преимущества по парам для мобильной карусели
  const groupedBenefits = [];
  for (let i = 0; i < benefits.length; i += 2) {
    groupedBenefits.push(benefits.slice(i, i + 2));
  }

  const groupedRealBenefits = [];
  for (let i = 0; i < realBenefits.length; i += 2) {
    groupedRealBenefits.push(realBenefits.slice(i, i + 2));
  }

  const BenefitCard = ({ benefit, index }) => (
    <div className="bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200/70 transition-all duration-500">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <benefit.icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="space-y-3">
          <EditableText
            as="h3"
            className="text-lg font-medium text-slate-900"
            isEditing={isEditMode}
            onSave={(text) => updateText(`benefitTitle${index}`, text)}
          >
            {currentTexts[`benefitTitle${index}`] || benefit.title}
          </EditableText>
          <EditableText
            as="p"
            className="text-sm text-slate-600"
            isEditing={isEditMode}
            onSave={(text) => updateText(`benefitDescription${index}`, text)}
          >
            {currentTexts[`benefitDescription${index}`] || benefit.description}
          </EditableText>
          <EditableText
            as="p"
            className="text-sm text-blue-600 font-medium"
            isEditing={isEditMode}
            onSave={(text) => updateText(`benefitResult${index}`, text)}
          >
            {currentTexts[`benefitResult${index}`] || `→ ${benefit.result}`}
          </EditableText>
        </div>
      </div>
    </div>
  );

  const RealBenefitCard = ({ benefit, index }) => (
    <div className="bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-200/30 hover:border-blue-300/50 transition-all duration-500">
      <div className="text-center space-y-3">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {benefit.metric}
        </div>
        <EditableText
          as="h3"
          className="text-lg font-medium text-slate-900"
          isEditing={isEditMode}
          onSave={(text) => updateText(`realBenefitTitle${index}`, text)}
        >
          {currentTexts[`realBenefitTitle${index}`] || benefit.title}
        </EditableText>
        <EditableText
          as="p"
          className="text-sm text-slate-600"
          isEditing={isEditMode}
          onSave={(text) => updateText(`realBenefitDescription${index}`, text)}
        >
          {currentTexts[`realBenefitDescription${index}`] || benefit.description}
        </EditableText>
      </div>
    </div>
  );

  return (
    <PresentationSlide slideNumber={4} background="gradient">
      <div className="relative min-h-screen py-16 overflow-hidden">
        {/* Futuristic background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-400/10 blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-slate-800/15 to-blue-900/15 blur-3xl"></div>
          
          {/* Elegant gradient lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>
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
              {currentTexts.title || 'Что вы на самом деле получаете с AIVA'}
            </EditableText>
          </div>

          {/* Split visualization */}
          <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto items-center mb-16">
            {/* Before - stressed */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-light text-slate-600">Сегодня</h2>
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl border border-slate-300 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-500/20"></div>
                  <div className="relative z-10 text-center space-y-3">
                    <TrendingUp className="w-16 h-16 mx-auto text-slate-500 transform rotate-180" />
                    <p className="text-sm text-slate-600 font-medium">Стресс, хаос,<br />потери контроля</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After - calm */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-light text-slate-600">С AIVA</h2>
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl border border-blue-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30"></div>
                  <div className="relative z-10 text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm text-blue-700 font-medium">Спокойствие,<br />контроль, рост</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central message */}
          <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-100 mb-16">
            <EditableText
              as="p"
              className="text-xl text-slate-700 font-light"
              isEditing={isEditMode}
              onSave={(text) => updateText('centralMessage', text)}
            >
              {currentTexts.centralMessage || 'Когда продажи, сервис и контроль работают за вас, вы можете жить, а не тушить пожары.'}
            </EditableText>
          </div>

          {/* Benefits grid - responsive */}
          {isMobile ? (
            <div className="max-w-full mx-auto px-4">
              <Carousel className="w-full" opts={{ align: "start" }}>
                <CarouselContent>
                  {groupedBenefits.map((benefitPair, pairIndex) => (
                    <CarouselItem key={pairIndex}>
                      <div className="space-y-4">
                        {benefitPair.map((benefit, benefitIndex) => {
                          const actualIndex = pairIndex * 2 + benefitIndex;
                          return (
                            <BenefitCard key={actualIndex} benefit={benefit} index={actualIndex} />
                          );
                        })}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          )}

          {/* Real benefits section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-light text-slate-900 mb-2">
                Что получает ваш бизнес уже в первый месяц
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            {/* Real benefits - responsive */}
            {isMobile ? (
              <div className="max-w-full mx-auto px-4">
                <Carousel className="w-full" opts={{ align: "start" }}>
                  <CarouselContent>
                    {groupedRealBenefits.map((benefitPair, pairIndex) => (
                      <CarouselItem key={pairIndex}>
                        <div className="space-y-4">
                          {benefitPair.map((benefit, benefitIndex) => {
                            const actualIndex = pairIndex * 2 + benefitIndex;
                            return (
                              <RealBenefitCard key={actualIndex} benefit={benefit} index={actualIndex} />
                            );
                          })}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
                {realBenefits.slice(0, 3).map((benefit, index) => (
                  <RealBenefitCard key={index} benefit={benefit} index={index} />
                ))}
              </div>
            )}

            {!isMobile && (
              <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                {realBenefits.slice(3).map((benefit, index) => (
                  <RealBenefitCard key={index + 3} benefit={benefit} index={index + 3} />
                ))}
              </div>
            )}
          </div>

          {/* Bottom conclusion */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
            <div className="relative z-10 text-center">
              <EditableText
                as="p"
                className="text-xl text-white font-light max-w-4xl mx-auto"
                isEditing={isEditMode}
                onSave={(text) => updateText('bottomConclusion', text)}
              >
                {currentTexts.bottomConclusion || 'AIVA — это больше, чем инструмент для бизнеса. Это ваш гарантированный способ вернуть себе спокойствие и свободу, сохраняя рост и прибыль компании.'}
              </EditableText>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableSolutionSlide;
