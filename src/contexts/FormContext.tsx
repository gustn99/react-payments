/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useRef, useState } from 'react';

type Values<K extends string> = Record<K, string>;
type Errors<K extends string> = Record<K, string>;
type Element = HTMLInputElement | HTMLSelectElement;
type Refs<K extends string> = Record<K, Element>;

export interface FormContextValue<K extends string> {
  values: Values<K>;
  errors: Errors<K>;
  register: (name: K, validate?: (value: string, values: Values<K>) => void) => RegisterReturn;
}

export interface RegisterReturn {
  name: string;
  onChange: (e: React.ChangeEvent<Element> | string) => void;
  ref: (refNode: Element | null) => void;
  value: string;
  error: string;
  isError: boolean;
}

export const FormContext = createContext<FormContextValue<any> | null>(null);

export interface FormProviderProps<K extends string> {
  defaultValues?: Values<K>;
  children: React.ReactNode;
}

export const FormProvider = <K extends string>({ defaultValues, children }: FormProviderProps<K>) => {
  const [values, setValues] = useState<Values<K>>(defaultValues ?? ({} as Values<K>));
  const [errors, setErrors] = useState<Errors<K>>({} as Errors<K>);
  const refs = useRef<Refs<K>>({} as Refs<K>);

  const setFormValue = (name: K, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setFormError = (name: K, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const register: FormContextValue<K>['register'] = (name, validate) => {
    const ref = (refNode: Element | null) => {
      if (!refNode) return;
      refs.current[name] = refNode;
    };

    const onChange = (e: React.ChangeEvent<Element> | string) => {
      const value = typeof e === 'string' ? e : e.target.value;
      try {
        validate?.(value, values);
        setFormError(name, '');
        setFormValue(name, value);
      } catch (error) {
        setFormError(name, (error as Error).message ?? '알 수 없는 문제가 발생했습니다.');
        setFormValue(name, value);
      }
    };

    return {
      name,
      onChange,
      ref,
      value: values[name] ?? '',
      error: errors[name] ?? '',
      isError: Boolean(errors[name]),
    };
  };

  return <FormContext.Provider value={{ values, errors, register }}>{children}</FormContext.Provider>;
};
