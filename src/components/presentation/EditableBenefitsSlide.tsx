
import React from 'react';
import BenefitsSlide from './BenefitsSlide';

interface EditableBenefitsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableBenefitsSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableBenefitsSlideProps) => {
  return <BenefitsSlide />;
};

export default EditableBenefitsSlide;
