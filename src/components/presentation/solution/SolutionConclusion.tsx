
import React from 'react';
import EditableText from '../../EditableText';

interface SolutionConclusionProps {
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}

const SolutionConclusion = ({ isEditMode, currentTexts, updateText }: SolutionConclusionProps) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
      <div className="relative z-10 text-center">
        <EditableText
          as="p"
          className="text-xl text-white font-light max-w-4xl mx-auto"
          isEditing={isEditMode}
          onSave={(text) => updateText('bottomConclusion', text)}
        >
          {currentTexts.bottomConclusion || 'AIVA — это больше, чем инструмент для бизнеса. Это ваш гарантированный способ вернуть себе спокойствие и свободу, сохраняя рост и прибыль компании.'}
        </EditableText>
      </div>
    </div>
  );
};

export default SolutionConclusion;
