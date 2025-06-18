
import React from 'react';
import SegmentsSlide from './SegmentsSlide';

interface EditableSegmentsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableSegmentsSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableSegmentsSlideProps) => {
  return <SegmentsSlide />;
};

export default EditableSegmentsSlide;
