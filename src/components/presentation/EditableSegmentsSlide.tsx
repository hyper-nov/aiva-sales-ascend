
import React from 'react';
import SegmentsSlide from './SegmentsSlide';

interface EditableSegmentsSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableSegmentsSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableSegmentsSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <SegmentsSlide />;
};

export default EditableSegmentsSlide;
