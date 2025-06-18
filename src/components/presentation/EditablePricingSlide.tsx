
import React from 'react';
import PricingSlide from './PricingSlide';

interface EditablePricingSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditablePricingSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditablePricingSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <PricingSlide />;
};

export default EditablePricingSlide;
