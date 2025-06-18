
import React from 'react';
import HumanVsAiSlide from './HumanVsAiSlide';

interface EditableHumanVsAiSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableHumanVsAiSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableHumanVsAiSlideProps) => {
  return <HumanVsAiSlide />;
};

export default EditableHumanVsAiSlide;
