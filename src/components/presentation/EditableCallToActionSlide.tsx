
import React from 'react';
import CallToActionSlide from './CallToActionSlide';

interface EditableCallToActionSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableCallToActionSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableCallToActionSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <CallToActionSlide />;
};

export default EditableCallToActionSlide;
