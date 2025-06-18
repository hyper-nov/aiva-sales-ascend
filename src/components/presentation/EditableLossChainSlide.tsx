
import React from 'react';
import LossChainSlide from './LossChainSlide';

interface EditableLossChainSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableLossChainSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableLossChainSlideProps) => {
  return <LossChainSlide />;
};

export default EditableLossChainSlide;
