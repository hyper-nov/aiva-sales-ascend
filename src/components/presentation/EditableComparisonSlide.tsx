
import React from 'react';
import ComparisonSlide from './ComparisonSlide';

interface EditableComparisonSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableComparisonSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableComparisonSlideProps) => {
  return <ComparisonSlide />;
};

export default EditableComparisonSlide;
