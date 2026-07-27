import { useRef } from 'react';

export const useMultipleInput = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const registerInputRef = (index: number) => (el: HTMLInputElement | null) => {
    if (!el) return;
    inputRefs.current[index] = el;
  };

  const moveToPrev = (index: number) => {
    inputRefs.current[index - 1]?.focus();
  };

  const moveToNext = (index: number) => {
    inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    if (inputValue === '' && e.key === 'Backspace') {
      e.preventDefault();
      moveToPrev(index);
      return;
    }

    if (inputRefs.current[index]?.selectionStart === 0 && e.key === 'ArrowLeft') {
      e.preventDefault();
      moveToPrev(index);
      return;
    }

    if (inputRefs.current[index]?.selectionStart === inputValue.length && e.key === 'ArrowRight') {
      moveToNext(index);
      return;
    }
  };

  return { registerInputRef, moveToPrev, moveToNext, handleKeyDown };
};
