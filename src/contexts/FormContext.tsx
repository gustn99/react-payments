/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useRef, useState } from 'react';

type Values<K extends string> = Record<K, string | undefined>;
type Errors<K extends string> = Record<K, string | undefined>;
type Touched<K extends string> = Record<K, boolean | undefined>;
type Element = HTMLInputElement | HTMLSelectElement;
type Refs<K extends string> = Record<K, Element | undefined>;

export interface RegisterOptions<K extends string> {
  validate?: (value: string, values: Values<K>) => void;
  onSuccess?: (value: string) => void;
}

export interface FormContextValue<K extends string> {
  values: Values<K>;
  errors: Errors<K>;
  touched: Touched<K>;
  register: (name: K, options?: RegisterOptions<K>) => RegisterReturn;
}

export interface RegisterReturn {
  name: string;
  onChange: (e: React.ChangeEvent<Element> | string) => void;
  onBlur: () => void;
  ref: (refNode: Element | null) => void;
  value: string;
}

export const FormContext = createContext<FormContextValue<any> | null>(null);

export interface FormProviderProps<K extends string> {
  defaultValues?: Values<K>;
  children: React.ReactNode;
}

export const FormProvider = <K extends string>({ defaultValues, children }: FormProviderProps<K>) => {
  const [values, setValues] = useState<Values<K>>(defaultValues ?? ({} as Values<K>));
  const [errors, setErrors] = useState<Errors<K>>({} as Errors<K>);
  const [touched, setTouched] = useState<Touched<K>>({} as Touched<K>);
  const refs = useRef<Refs<K>>({} as Refs<K>);

  const setFormValue = (name: K, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setFormError = (name: K, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const setFormTouched = (name: K, touched: boolean) => {
    setTouched((prev) => ({ ...prev, [name]: touched }));
  };

  const register: FormContextValue<K>['register'] = (name, options) => {
    const ref = (refNode: Element | null) => {
      if (!refNode) return;
      refs.current[name] = refNode;
    };

    const onChange = (e: React.ChangeEvent<Element> | string) => {
      const value = typeof e === 'string' ? e : e.target.value;

      try {
        options?.validate?.(value, values);
        options?.onSuccess?.(value);
        setFormValue(name, value);
        setFormError(name, '');
      } catch (error) {
        setFormValue(name, value);
        setFormError(name, (error as Error).message ?? '알 수 없는 문제가 발생했습니다.');
      }
    };

    const onBlur = () => {
      if (!touched[name]) {
        setFormTouched(name, true);
      }
    };

    return {
      name,
      onChange,
      onBlur,
      ref,
      value: values[name] ?? '',
    };
  };

  return <FormContext.Provider value={{ values, errors, touched, register }}>{children}</FormContext.Provider>;
};
