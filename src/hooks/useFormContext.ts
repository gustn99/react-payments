import { useContext } from 'react';
import { FormContext, type FormContextValue } from '../contexts/FormContext';

export function useFormContext<T extends string>() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  return context as FormContextValue<T>;
}
