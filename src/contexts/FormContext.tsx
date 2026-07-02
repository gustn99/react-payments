/* eslint-disable react-refresh/only-export-components */
import { createContext, useRef, useState } from 'react';

export interface FormContextValue {
  values: Record<string, string>;
  errors: Record<string, string>;
  register: (name: string, validate?: (value: string, values: FormContextValue['values']) => void) => RegisterReturn;
}

interface RegisterReturn {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref: (refNode: HTMLInputElement) => void;
  value: string;
  error: string;
}

export const FormContext = createContext<FormContextValue | null>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const refs = useRef<Record<string, HTMLInputElement>>({});

  const setFormValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    console.log(refs.current);
    console.log(errors);
  };

  const setFormError = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const register: FormContextValue['register'] = (name, validate) => {
    const ref = (refNode: HTMLInputElement) => {
      refs.current[name] = refNode;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        validate?.(e.target.value, values);
        setFormError(name, '');
        setFormValue(name, e.target.value);
      } catch (error) {
        setFormError(name, (error as Error).message ?? '알 수 없는 문제가 발생했습니다.');
        setFormValue(name, e.target.value);
      }
    };

    return { name, onChange, ref, value: values[name] ?? '', error: errors[name] ?? '' };
  };

  return <FormContext.Provider value={{ values: values, errors, register }}>{children}</FormContext.Provider>;
};
