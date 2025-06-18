
import React from 'react';
import WhyUsSlide from './WhyUsSlide';

interface EditableWhyUsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableWhyUsSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableWhyUsSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <WhyUsSlide />;
};

export default EditableWhyUsSlide;
