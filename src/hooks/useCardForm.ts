import { useFormContext } from './useFormContext';

type CardFormField = 'cardNumbers' | 'cardCompany' | 'expirationMonth' | 'expirationYear' | 'cvc' | 'password';

export default function useCardForm() {
  return useFormContext<CardFormField>();
}
