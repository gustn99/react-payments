import { useContext } from 'react';
import { ProgressiveContext, type ProgressiveContextType } from '@/contexts/ProgressiveContext';

export function useProgressiveContext<T extends string>() {
  const context = useContext(ProgressiveContext);

  if (!context) {
    throw new Error('useProgressiveContext must be used within a ProgressiveProvider');
  }

  return context as ProgressiveContextType<T>;
}
