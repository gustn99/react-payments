import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/App.tsx';
import type { CardCompany } from '@/constants/cardCompanies.ts';

interface AddCardCompleteState {
  cardNumberPrefix: string;
  cardCompany: CardCompany;
}

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && Object.getPrototypeOf(value) === Object.prototype;
};

const isAddCardCompleteState = (state: unknown): state is AddCardCompleteState => {
  return isPlainObject(state) && typeof state.cardNumberPrefix === 'string' && typeof state.cardCompany === 'string';
};

export default function useAddCardCompleteNavigate() {
  const nav = useNavigate();
  const loc = useLocation();
  const { state } = loc;

  const navigate = (state: AddCardCompleteState) => nav(ROUTES.addCardComplete, { replace: true, state });
  const getState = () => {
    if (isAddCardCompleteState(state)) {
      return state;
    }
    return null;
  };

  return { navigate, getState };
}
