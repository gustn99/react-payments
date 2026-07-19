import { useFormContext } from '@/hooks/useFormContext';

type CardFormField = 'cardNumbers' | 'cardCompany' | 'expirationMonth' | 'expirationYear' | 'cvc' | 'password';

export default function useCardForm() {
  return useFormContext<CardFormField>();
}
