
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  isEditing: boolean;
  onSave?: (newText: string) => void;
}

const EditableText = ({ 
  children, 
  className, 
  as: Component = 'p', 
  isEditing,
  onSave 
}: EditableTextProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [text, setText] = useState(() => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return children.toString();
    return '';
  });

  useEffect(() => {
    if (typeof children === 'string') {
      setText(children);
    } else if (typeof children === 'number') {
      setText(children.toString());
    } else {
      setText('');
    }
  }, [children]);

  useEffect(() => {
    if (isEditMode && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isEditMode]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    if (isEditing) {
      setIsEditMode(true);
    }
  };

  const handleSave = () => {
    setIsEditMode(false);
    onSave?.(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave();
    }
    if (e.key === 'Escape') {
      setIsEditMode(false);
      setText(typeof children === 'string' ? children : children?.toString() || '');
    }
  };

  if (isEditMode) {
    return (
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full bg-white/90 border-2 border-blue-400 rounded-lg p-2 resize-none overflow-hidden",
            className
          )}
          style={{ minHeight: '2.5rem' }}
        />
        <div className="absolute -top-8 left-0 text-xs text-blue-600 bg-white px-2 py-1 rounded border">
          Ctrl+Enter - сохранить, Esc - отмена
        </div>
      </div>
    );
  }

  return (
    <Component
      className={cn(
        className,
        isEditing && "cursor-pointer hover:bg-blue-50/50 hover:outline hover:outline-2 hover:outline-blue-300 rounded-lg transition-all duration-200 relative group"
      )}
      onClick={handleClick}
    >
      {text}
      {isEditing && (
        <div className="absolute -top-6 left-0 opacity-0 group-hover:opacity-100 text-xs text-blue-600 bg-white px-2 py-1 rounded border transition-opacity">
          Кликните для редактирования
        </div>
      )}
    </Component>
  );
};

export default EditableText;
