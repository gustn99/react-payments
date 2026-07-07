/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext } from 'react';

export type StepInfo<T> = {
  prev: T | null;
  next: T | null;
};
export type Steps<T extends string> = Record<T, StepInfo<T>>;

export type ProgressiveContextType<T extends string> = {
  step: T;
  steps: Steps<T>;
};

export const ProgressiveContext = createContext<ProgressiveContextType<any> | null>(null);

export const ProgressiveProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ProgressiveContextType<any>;
}) => {
  return <ProgressiveContext.Provider value={value}>{children}</ProgressiveContext.Provider>;
};
