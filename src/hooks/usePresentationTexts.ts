
import { useState } from 'react';

export interface SlideTexts {
  [slideId: string]: {
    [textKey: string]: string;
  };
}

export const usePresentationTexts = () => {
  const [slideTexts, setSlideTexts] = useState<SlideTexts>({});

  const updateSlideText = (slideId: string, textKey: string, newText: string) => {
    setSlideTexts(prev => ({
      ...prev,
      [slideId]: {
        ...prev[slideId],
        [textKey]: newText
      }
    }));
  };

  const getSlideText = (slideId: string, textKey: string, defaultText: string) => {
    return slideTexts[slideId]?.[textKey] || defaultText;
  };

  const exportTexts = () => {
    const dataStr = JSON.stringify(slideTexts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'presentation-texts.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importTexts = (jsonFile: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedTexts = JSON.parse(e.target?.result as string);
        setSlideTexts(importedTexts);
      } catch (error) {
        console.error('Ошибка импорта текстов:', error);
      }
    };
    reader.readAsText(jsonFile);
  };

  return {
    slideTexts,
    setSlideTexts,
    updateSlideText,
    getSlideText,
    exportTexts,
    importTexts
  };
};
