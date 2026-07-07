/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useMemo, useState } from 'react';
import Flex from '../components/common/shared/Flex.tsx';
import type { ProgressiveContextType, Steps } from '../contexts/ProgressiveContext';
import { ProgressiveProvider } from '../contexts/ProgressiveContext';
import { useProgressiveContext } from './useProgressiveContext';

export type { StepInfo, Steps } from '../contexts/ProgressiveContext';

function Step<T extends string>({ children, name }: { children: React.ReactNode; name: T }) {
  const { step, steps } = useProgressiveContext<T>();

  const show = useMemo(() => {
    let current: T | null = step;
    while (current) {
      if (current === name) return true;
      current = steps[current]?.prev || null;
    }
    return false;
  }, [step, steps, name]);

  return show ? <Flex direction="column">{children}</Flex> : null;
}

function Progressive<T extends string>({
  value,
  children,
  reverse,
}: {
  value: ProgressiveContextType<T>;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <ProgressiveProvider value={value}>
      <Flex direction={reverse ? 'column-reverse' : 'column'}>{children}</Flex>
    </ProgressiveProvider>
  );
}
Progressive.Step = Step;

export default function useProgressive<T extends string>(steps: Steps<T>, initialStep: T) {
  const [step, setStep] = useState<T>(initialStep);

  const prev = useCallback(
    (name: T) => {
      if (step !== name) return;

      const prevStep = steps[name]?.prev;
      if (prevStep) {
        setStep(prevStep);
      }
    },
    [step, steps],
  );

  const next = useCallback(
    (name: T) => {
      if (step !== name) return;

      const nextStep = steps[name]?.next;
      if (nextStep) {
        setStep(nextStep);
      }
    },
    [step, steps],
  );

  const value = useMemo(() => ({ step, steps }), [step, steps]);

  return useMemo(() => ({ Progressive, value, prev, next, step, setStep }), [value, prev, next, step]);
}
