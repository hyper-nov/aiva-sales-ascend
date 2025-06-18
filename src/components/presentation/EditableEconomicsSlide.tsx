
import React from 'react';
import EconomicsSlide from './EconomicsSlide';

interface EditableEconomicsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableEconomicsSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableEconomicsSlideProps) => {
  return <EconomicsSlide />;
};

export default EditableEconomicsSlide;
