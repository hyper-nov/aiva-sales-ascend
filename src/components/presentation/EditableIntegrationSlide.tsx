
import React from 'react';
import IntegrationSlide from './IntegrationSlide';

interface EditableIntegrationSlideProps {
  isEditMode?: boolean;
  slideTexts?: Record<string, Record<string, string>>;
  setSlideTexts?: (texts: Record<string, Record<string, string>>) => void;
}

const EditableIntegrationSlide = ({ isEditMode, slideTexts, setSlideTexts }: EditableIntegrationSlideProps) => {
  return <IntegrationSlide />;
};

export default EditableIntegrationSlide;
