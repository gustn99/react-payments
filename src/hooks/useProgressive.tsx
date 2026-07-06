import styled from '@emotion/styled';
import React, { useState } from 'react';

export type StepInfo<T> = {
  prev: T | null;
  next: T | null;
};
export type Steps<T extends string> = Record<T, StepInfo<T>>;

export default function useProgressive<T extends string>(steps: Steps<T>, initialStep: T) {
  const [step, setStep] = useState<T>(initialStep);

  const show = (name: T) => {
    let current: T | null = step;
    while (current) {
      if (current === name) return true;
      current = steps[current]?.prev || null;
    }
    return false;
  };

  const Progressive = ({ children, reverse }: { children: React.ReactNode; reverse?: boolean }) => {
    return <ProgressiveContainer reverse={reverse}>{children}</ProgressiveContainer>;
  };

  const Step = ({ children, name }: { children: React.ReactNode; name: T }) => {
    return show(name) ? <StepContainer>{children}</StepContainer> : null;
  };

  const prev = (name: T) => {
    if (step !== name) return;

    const prevStep = steps[name]?.prev;
    if (prevStep) {
      setStep(prevStep);
    }
  };

  const next = (name: T) => {
    if (step !== name) return;

    const nextStep = steps[name]?.next;
    if (nextStep) {
      setStep(nextStep);
    }
  };

  return { Progressive, Step, prev, next, step, setStep };
}

const ProgressiveContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
