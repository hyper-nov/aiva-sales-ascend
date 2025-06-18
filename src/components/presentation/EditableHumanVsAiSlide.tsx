
import React from 'react';
import HumanVsAiSlide from './HumanVsAiSlide';

interface EditableHumanVsAiSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableHumanVsAiSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableHumanVsAiSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <HumanVsAiSlide />;
};

export default EditableHumanVsAiSlide;
