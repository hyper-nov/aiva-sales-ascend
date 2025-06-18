
import React from 'react';
import WhyUsSlide from './WhyUsSlide';

interface EditableWhyUsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableWhyUsSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableWhyUsSlideProps) => {
  return <WhyUsSlide />;
};

export default EditableWhyUsSlide;
