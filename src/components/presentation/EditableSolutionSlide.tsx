
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import { Monitor, Zap, Shield, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useIsMobile } from '../../hooks/use-mobile';
import SolutionHeader from './solution/SolutionHeader';
import SolutionVisualization from './solution/SolutionVisualization';
import BenefitCard from './solution/BenefitCard';
import RealBenefitCard from './solution/RealBenefitCard';
import SolutionConclusion from './solution/SolutionConclusion';

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

  // Правильная группировка преимуществ по парам для мобильной карусели
  const groupedBenefits = React.useMemo(() => {
    const groups = [];
    for (let i = 0; i < benefits.length; i += 2) {
      groups.push(benefits.slice(i, i + 2));
    }
    return groups;
  }, []);

  // Правильная группировка реальных преимуществ по парам для мобильной карусели  
  const groupedRealBenefits = React.useMemo(() => {
    const groups = [];
    for (let i = 0; i < realBenefits.length; i += 2) {
      groups.push(realBenefits.slice(i, i + 2));
    }
    return groups;
  }, []);

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
          <SolutionHeader 
            isEditMode={isEditMode}
            currentTexts={currentTexts}
            updateText={updateText}
          />

          {/* Split visualization and central message */}
          <SolutionVisualization 
            isEditMode={isEditMode}
            currentTexts={currentTexts}
            updateText={updateText}
          />

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
                            <BenefitCard 
                              key={actualIndex} 
                              benefit={benefit} 
                              index={actualIndex}
                              isEditMode={isEditMode}
                              currentTexts={currentTexts}
                              updateText={updateText}
                            />
                          );
                        })}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-2">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index} 
                  benefit={benefit} 
                  index={index}
                  isEditMode={isEditMode}
                  currentTexts={currentTexts}
                  updateText={updateText}
                />
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

            {/* Real benefits - единый стиль карусели по 2 элемента */}
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
                              <RealBenefitCard 
                                key={actualIndex}
                                benefit={benefit} 
                                index={actualIndex}
                                isEditMode={isEditMode}
                                currentTexts={currentTexts}
                                updateText={updateText}
                              />
                            );
                          })}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4 space-x-2">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {realBenefits.slice(0, 3).map((benefit, index) => (
                    <RealBenefitCard 
                      key={index} 
                      benefit={benefit} 
                      index={index}
                      isEditMode={isEditMode}
                      currentTexts={currentTexts}
                      updateText={updateText}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {realBenefits.slice(3).map((benefit, index) => (
                    <RealBenefitCard 
                      key={index + 3} 
                      benefit={benefit} 
                      index={index + 3}
                      isEditMode={isEditMode}
                      currentTexts={currentTexts}
                      updateText={updateText}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Bottom conclusion */}
          <SolutionConclusion 
            isEditMode={isEditMode}
            currentTexts={currentTexts}
            updateText={updateText}
          />
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableSolutionSlide;
