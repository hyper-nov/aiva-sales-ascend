
import React from 'react';
import PricingSlide from './PricingSlide';

interface EditablePricingSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditablePricingSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditablePricingSlideProps) => {
  return <PricingSlide />;
};

export default EditablePricingSlide;
