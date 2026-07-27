import { ROUTES } from '@/App.tsx';
import { type CardCompany, isCardCompany } from '@/constants/cardCompanies.ts';
import { useLocation, useNavigate } from 'react-router-dom';

interface AddCardCompleteState {
  cardNumberPrefix: string;
  cardCompany: CardCompany;
}

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && Object.getPrototypeOf(value) === Object.prototype;
};

const isAddCardCompleteState = (state: unknown): state is AddCardCompleteState => {
  return isPlainObject(state) && typeof state.cardNumberPrefix === 'string' && isCardCompany(state.cardCompany);
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
