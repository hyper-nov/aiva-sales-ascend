
import React from 'react';
import EditableText from '../../EditableText';
import { TrendingUp, Zap } from 'lucide-react';

interface SolutionVisualizationProps {
  isEditMode: boolean;
  currentTexts: Record<string, string>;
  updateText: (key: string, newText: string) => void;
}

const SolutionVisualization = ({ isEditMode, currentTexts, updateText }: SolutionVisualizationProps) => {
  return (
    <>
      {/* Split visualization */}
      <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto items-center mb-16">
        {/* Before - stressed */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-light text-slate-600">Сегодня</h2>
          <div className="relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl border border-slate-300 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-500/20"></div>
              <div className="relative z-10 text-center space-y-3">
                <TrendingUp className="w-16 h-16 mx-auto text-slate-500 transform rotate-180" />
                <p className="text-sm text-slate-600 font-medium">Стресс, хаос,<br />потери контроля</p>
              </div>
            </div>
          </div>
        </div>

        {/* After - calm */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-light text-slate-600">С AIVA</h2>
          <div className="relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl border border-blue-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30"></div>
              <div className="relative z-10 text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-blue-700 font-medium">Спокойствие,<br />контроль, рост</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Central message */}
      <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-100 mb-16">
        <EditableText
          as="p"
          className="text-xl text-slate-700 font-light"
          isEditing={isEditMode}
          onSave={(text) => updateText('centralMessage', text)}
        >
          {currentTexts.centralMessage || 'Когда продажи, сервис и контроль работают за вас, вы можете жить, а не тушить пожары.'}
        </EditableText>
      </div>
    </>
  );
};

export default SolutionVisualization;
