
import React from 'react';
import ComparisonSlide from './ComparisonSlide';
import EditableText from '../EditableText';

interface EditableComparisonSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableComparisonSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableComparisonSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <ComparisonSlide />;
};

export default EditableComparisonSlide;
