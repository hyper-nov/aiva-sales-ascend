
import React from 'react';
import SolutionSlide from './SolutionSlide';

interface EditableSolutionSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableSolutionSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableSolutionSlideProps) => {
  return <SolutionSlide />;
};

export default EditableSolutionSlide;
