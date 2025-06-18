
import React from 'react';
import HumanitySlide from './HumanitySlide';

interface EditableHumanitySlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableHumanitySlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableHumanitySlideProps) => {
  return <HumanitySlide />;
};

export default EditableHumanitySlide;
