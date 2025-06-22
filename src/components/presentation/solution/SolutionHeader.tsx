
import React from 'react';
import EditableText from '../../EditableText';

interface SolutionHeaderProps {
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}

const SolutionHeader = ({ isEditMode, currentTexts, updateText }: SolutionHeaderProps) => {
  return (
    <div className="text-center space-y-6">
      <EditableText
        as="h1"
        className="text-5xl font-light text-slate-900 leading-tight"
        isEditing={isEditMode}
        onSave={(text) => updateText('title', text)}
      >
        {currentTexts.title || 'Что вы на самом деле получаете с AIVA'}
      </EditableText>
    </div>
  );
};

export default SolutionHeader;
