
import React from 'react';
import EditableText from '../../EditableText';

interface RealBenefitCardProps {
  benefit: {
    metric: string;
    title: string;
    description: string;
  };
  index: number;
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}

const RealBenefitCard = ({ benefit, index, isEditMode, currentTexts, updateText }: RealBenefitCardProps) => {
  return (
    <div className="bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-200/30 hover:border-blue-300/50 transition-all duration-500">
      <div className="text-center space-y-3">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {benefit.metric}
        </div>
        <EditableText
          as="h3"
          className="text-lg font-medium text-slate-900"
          isEditing={isEditMode}
          onSave={(text) => updateText(`realBenefitTitle${index}`, text)}
        >
          {currentTexts[`realBenefitTitle${index}`] || benefit.title}
        </EditableText>
        <EditableText
          as="p"
          className="text-sm text-slate-600"
          isEditing={isEditMode}
          onSave={(text) => updateText(`realBenefitDescription${index}`, text)}
        >
          {currentTexts[`realBenefitDescription${index}`] || benefit.description}
        </EditableText>
      </div>
    </div>
  );
};

export default RealBenefitCard;
