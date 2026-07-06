import styled from '@emotion/styled';
import React, { useCallback, useMemo, useState } from 'react';

export type StepInfo<T> = {
  prev: T | null;
  next: T | null;
};
export type Steps<T extends string> = Record<T, StepInfo<T>>;

export default function useProgressive<T extends string>(steps: Steps<T>, initialStep: T) {
  const [step, setStep] = useState<T>(initialStep);

  const show = useCallback(
    (name: T) => {
      let current: T | null = step;
      while (current) {
        if (current === name) return true;
        current = steps[current]?.prev || null;
      }
      return false;
    },
    [step, steps],
  );

  const ProgressiveRoot = useCallback(({ children, reverse }: { children: React.ReactNode; reverse?: boolean }) => {
    return <ProgressiveContainer reverse={reverse}>{children}</ProgressiveContainer>;
  }, []);

  const Step = useCallback(
    ({ children, name }: { children: React.ReactNode; name: T }) => {
      return show(name) ? <StepContainer>{children}</StepContainer> : null;
    },
    [show],
  );

  const Progressive = useMemo(() => {
    return Object.assign(ProgressiveRoot, {
      Step,
    });
  }, [ProgressiveRoot, Step]);

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

  return useMemo(() => ({ Progressive, prev, next, step, setStep }), [Progressive, prev, next, step]);
}

const ProgressiveContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
