
import React from 'react';
import EditableText from '../../EditableText';

interface CostItem {
  item: string;
  amount: string;
  detail: string;
}

interface CostCardProps {
  title: string;
  costs: CostItem[];
  total: number;
  isAfter?: boolean;
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}

const CostCard = ({ title, costs, total, isAfter = false, isEditMode, currentTexts, updateText }: CostCardProps) => {
  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-light text-slate-700 mb-4">{title}</h2>
        <div className={`w-full h-1 rounded-full ${isAfter ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 'bg-gradient-to-r from-slate-300 to-slate-400'}`}></div>
      </div>
      
      <div className={`${isAfter ? 'bg-gradient-to-br from-blue-50 to-cyan-50/50' : 'bg-gradient-to-br from-slate-50 to-slate-100/50'} backdrop-blur-sm rounded-3xl p-6 sm:p-8 border ${isAfter ? 'border-blue-200/50' : 'border-slate-200/50'} space-y-4 sm:space-y-6 min-h-[400px] flex flex-col justify-between`}>
        <div className="space-y-4 sm:space-y-6">
          {costs.map((cost, index) => (
            <div key={index} className="group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <EditableText
                    as="span"
                    className="text-sm text-slate-700 leading-relaxed block"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`${isAfter ? 'after' : 'before'}Item${index}`, text)}
                  >
                    {currentTexts[`${isAfter ? 'after' : 'before'}Item${index}`] || cost.item}
                  </EditableText>
                  {cost.detail && (
                    <EditableText
                      as="span"
                      className={`text-xs ${isAfter ? 'text-blue-600' : 'text-slate-500'} block mt-1`}
                      isEditing={isEditMode}
                      onSave={(text) => updateText(`${isAfter ? 'after' : 'before'}Detail${index}`, text)}
                    >
                      {currentTexts[`${isAfter ? 'after' : 'before'}Detail${index}`] || cost.detail}
                    </EditableText>
                  )}
                </div>
                <EditableText
                  as="span"
                  className={`text-base sm:text-lg font-medium whitespace-nowrap ${isAfter ? 'text-blue-700' : 'text-slate-800'}`}
                  isEditing={isEditMode}
                  onSave={(text) => updateText(`${isAfter ? 'after' : 'before'}Amount${index}`, text)}
                >
                  {currentTexts[`${isAfter ? 'after' : 'before'}Amount${index}`] || (cost.amount === "0" ? "0 ₽" : `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽/год`)}
                </EditableText>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`border-t ${isAfter ? 'border-blue-200' : 'border-slate-300'} pt-4 sm:pt-6`}>
          <div className={`flex justify-between items-center ${isAfter ? 'bg-gradient-to-r from-blue-100/70 to-cyan-100/70' : 'bg-white/70'} rounded-2xl p-4`}>
            <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
            <span className={`text-xl sm:text-2xl font-bold ${isAfter ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent' : 'text-slate-800'}`}>
              {formatNumber(total)} ₽/год
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCard;
