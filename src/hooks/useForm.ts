import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext.tsx';

export default function useForm() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}
