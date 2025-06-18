
import React from 'react';
import CallToActionSlide from './CallToActionSlide';

interface EditableCallToActionSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableCallToActionSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableCallToActionSlideProps) => {
  return <CallToActionSlide />;
};

export default EditableCallToActionSlide;
