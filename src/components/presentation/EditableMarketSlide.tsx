
import React from 'react';
import MarketSlide from './MarketSlide';

interface EditableMarketSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableMarketSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableMarketSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <MarketSlide />;
};

export default EditableMarketSlide;
