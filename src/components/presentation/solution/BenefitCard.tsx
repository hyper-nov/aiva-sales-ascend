import React from 'react';
import EditableText from '../../EditableText';
import { LucideIcon } from 'lucide-react';
interface BenefitCardProps {
  benefit: {
    icon: LucideIcon;
    title: string;
    description: string;
    result: string;
  };
  index: number;
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}
const BenefitCard = ({
  benefit,
  index,
  isEditMode,
  currentTexts,
  updateText
}: BenefitCardProps) => {
  return <div className="bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200/70 transition-all duration-500">
      <div className="flex items-start space-x-4">
        
        <div className="space-y-3">
          <EditableText as="h3" className="text-lg font-medium text-slate-900" isEditing={isEditMode} onSave={text => updateText(`benefitTitle${index}`, text)}>
            {currentTexts[`benefitTitle${index}`] || benefit.title}
          </EditableText>
          <EditableText as="p" className="text-sm text-slate-600" isEditing={isEditMode} onSave={text => updateText(`benefitDescription${index}`, text)}>
            {currentTexts[`benefitDescription${index}`] || benefit.description}
          </EditableText>
          <EditableText as="p" className="text-sm text-blue-600 font-medium" isEditing={isEditMode} onSave={text => updateText(`benefitResult${index}`, text)}>
            {currentTexts[`benefitResult${index}`] || `→ ${benefit.result}`}
          </EditableText>
        </div>
      </div>
    </div>;
};
export default BenefitCard;