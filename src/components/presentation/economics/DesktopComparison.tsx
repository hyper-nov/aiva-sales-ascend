
import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import EditableText from '../../EditableText';

interface CostItem {
  item: string;
  amount: string;
  detail: string;
}

interface DesktopComparisonProps {
  beforeCosts: CostItem[];
  afterCosts: CostItem[];
  totalBefore: number;
  totalAfter: number;
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}

const DesktopComparison = ({ 
  beforeCosts, 
  afterCosts, 
  totalBefore, 
  totalAfter, 
  isEditMode, 
  currentTexts, 
  updateText 
}: DesktopComparisonProps) => {
  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TrendingDown className="w-6 h-6 text-slate-500" />
            <h2 className="text-2xl font-light text-slate-700">До AIVA</h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 space-y-6">
          {beforeCosts.map((cost, index) => (
            <div key={index} className="group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <EditableText
                    as="span"
                    className="text-sm text-slate-700 leading-relaxed block"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`beforeItem${index}`, text)}
                  >
                    {currentTexts[`beforeItem${index}`] || cost.item}
                  </EditableText>
                  {cost.detail && (
                    <EditableText
                      as="span"
                      className="text-xs text-slate-500 block mt-1"
                      isEditing={isEditMode}
                      onSave={(text) => updateText(`beforeDetail${index}`, text)}
                    >
                      {currentTexts[`beforeDetail${index}`] || cost.detail}
                    </EditableText>
                  )}
                </div>
                <EditableText
                  as="span"
                  className="text-lg font-medium text-slate-800 whitespace-nowrap"
                  isEditing={isEditMode}
                  onSave={(text) => updateText(`beforeAmount${index}`, text)}
                >
                  {currentTexts[`beforeAmount${index}`] || `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽/год`}
                </EditableText>
              </div>
            </div>
          ))}
          
          <div className="border-t border-slate-300 pt-6">
            <div className="flex justify-between items-center bg-white/70 rounded-2xl p-4">
              <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
              <span className="text-2xl font-bold text-slate-800">
                {formatNumber(totalBefore)} ₽/год
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-light text-slate-700">С AIVA</h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 space-y-6">
          {afterCosts.map((cost, index) => (
            <div key={index} className="group hover:bg-white/50 rounded-xl p-3 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <EditableText
                    as="span"
                    className="text-sm text-slate-700 leading-relaxed block"
                    isEditing={isEditMode}
                    onSave={(text) => updateText(`afterItem${index}`, text)}
                  >
                    {currentTexts[`afterItem${index}`] || cost.item}
                  </EditableText>
                  {cost.detail && (
                    <EditableText
                      as="span"
                      className="text-xs text-blue-600 block mt-1"
                      isEditing={isEditMode}
                      onSave={(text) => updateText(`afterDetail${index}`, text)}
                    >
                      {currentTexts[`afterDetail${index}`] || cost.detail}
                    </EditableText>
                  )}
                </div>
                <EditableText
                  as="span"
                  className="text-lg font-medium text-blue-700 whitespace-nowrap"
                  isEditing={isEditMode}
                  onSave={(text) => updateText(`afterAmount${index}`, text)}
                >
                  {currentTexts[`afterAmount${index}`] || (cost.amount === "0" ? "0 ₽" : `${formatNumber(parseInt(cost.amount.replace(/\s/g, '')))} ₽/год`)}
                </EditableText>
              </div>
            </div>
          ))}
          
          <div className="border-t border-blue-200 pt-6">
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-100/70 to-cyan-100/70 rounded-2xl p-4">
              <span className="text-lg font-medium text-slate-900">ИТОГО:</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {formatNumber(totalAfter)} ₽/год
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopComparison;
