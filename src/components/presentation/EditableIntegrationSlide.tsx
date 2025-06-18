
import React from 'react';
import IntegrationSlide from './IntegrationSlide';

interface EditableIntegrationSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableIntegrationSlide = ({ isEditMode = false, slideTexts = {}, setSlideTexts }: EditableIntegrationSlideProps) => {
  // For now, render the original slide. Full implementation would require copying all content with EditableText components
  return <IntegrationSlide />;
};

export default EditableIntegrationSlide;
