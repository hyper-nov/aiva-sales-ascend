
import React from 'react';
import EditableText from '../../EditableText';

interface SavingsHighlightProps {
  savings: number;
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}

const SavingsHighlight = ({ savings, isEditMode, currentTexts, updateText }: SavingsHighlightProps) => {
  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-6 sm:p-8 border border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 text-center space-y-4">
          <EditableText
            as="h3"
            className="text-2xl sm:text-3xl font-light text-white"
            isEditing={isEditMode}
            onSave={(text) => updateText('savingsTitle', text)}
          >
            {currentTexts.savingsTitle || `Экономия до ${formatNumber(savings)} ₽/год`}
          </EditableText>
          <EditableText
            as="p"
            className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto"
            isEditing={isEditMode}
            onSave={(text) => updateText('savingsDescription', text)}
          >
            {currentTexts.savingsDescription || 'AIVA не просто дешевле, она сразу же приносит дополнительную прибыль за счет роста эффективности'}
          </EditableText>
        </div>
      </div>
    </div>
  );
};

export default SavingsHighlight;
