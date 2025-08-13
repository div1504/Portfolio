import { useState, useRef, useEffect } from 'react';
import { useEdit } from './EditContext';

interface EditableTextProps {
  contentKey: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  multiline?: boolean;
  placeholder?: string;
}

export function EditableText({ 
  contentKey, 
  as: Component = 'p', 
  className = '', 
  multiline = false,
  placeholder
}: EditableTextProps) {
  const { isEditMode, content, updateContent } = useEdit();
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState('');
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  
  const currentContent = content[contentKey] || placeholder || '';

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
      } else {
        inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
      }
    }
  }, [isEditing]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setLocalValue(currentContent);
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    updateContent(contentKey, localValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalValue('');
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Enter' && e.metaKey && multiline) {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleBlur = () => {
    handleSave();
  };

  if (isEditMode && isEditing) {
    const InputComponent = multiline ? 'textarea' : 'input';
    return (
      <InputComponent
        ref={inputRef as any}
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={`${className} bg-input-background border border-border rounded px-2 py-1 w-full resize-none`}
        style={multiline ? { minHeight: '100px' } : undefined}
        placeholder={placeholder}
      />
    );
  }

  const editableProps = isEditMode ? {
    onClick: handleClick,
    className: `${className} ${isEditMode ? 'cursor-text hover:bg-accent/50 rounded px-1 transition-colors' : ''}`,
    title: isEditMode ? 'Click to edit' : undefined
  } : {
    className
  };

  return (
    <Component {...editableProps}>
      {currentContent || placeholder}
    </Component>
  );
}