
import React from 'react';
import PresentationSlide from '../PresentationSlide';
import EditableText from '../EditableText';

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

  return (
    <PresentationSlide background="gradient">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <EditableText
            as="h1"
            className="text-5xl font-light text-slate-900 leading-tight"
            isEditing={isEditMode}
            onSave={text => updateText('title', text)}
          >
            {currentTexts.title || <>
              Что получает ваш бизнес уже в
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-normal">первый месяц работы с AIVA</span>
            </>}
          </EditableText>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default EditableBenefitsSlide;
