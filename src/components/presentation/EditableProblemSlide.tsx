
import React from 'react';
import ProblemSlide from './ProblemSlide';

interface EditableProblemSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableProblemSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableProblemSlideProps) => {
  return <ProblemSlide />;
};

export default EditableProblemSlide;
