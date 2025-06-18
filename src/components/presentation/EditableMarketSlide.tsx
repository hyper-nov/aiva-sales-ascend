
import React from 'react';
import MarketSlide from './MarketSlide';

interface EditableMarketSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableMarketSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableMarketSlideProps) => {
  return <MarketSlide />;
};

export default EditableMarketSlide;
