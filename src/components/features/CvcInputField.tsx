import CardInputField from '@/components/common/entities/CardInputField.tsx';
import NumberInput from '@/components/common/shared/NumberInput.tsx';
import Spacing from '@/components/common/shared/Spacing.tsx';
import Text from '@/components/common/shared/Text.tsx';
import { CARD_RULES } from '@/constants/cardRules.ts';
import useCardForm from '@/hooks/useCardForm.ts';
import { getCardBrand } from '@/lib/getCardBrand.ts';
import { validateCvc } from '@/lib/validateForm.ts';

interface CvcInputFieldProps {
  onComplete?: () => void;
}

export default function CvcInputField({ onComplete }: CvcInputFieldProps) {
  const { register, values, errors, touched } = useCardForm();
  const errorText = (touched.cvc && errors.cvc) || '';
  const isError = Boolean(errorText);

  const cardBrand = getCardBrand(values.cardNumbers ?? '');

  return (
    <CardInputField title="CVC 번호를 입력해 주세요" errorText={errorText}>
      <Text as="label" typograph="body1">
        CVC
      </Text>
      <Spacing direction="vertical" size={8} />
      <NumberInput
        autoFocus
        placeholder="123"
        maxLength={CARD_RULES[cardBrand].cvcLength}
        isError={isError}
        {...register('cvc', {
          validate: (value, values) => validateCvc(value, values.cardNumbers ?? ''),
          onSuccess: onComplete,
        })}
      />
    </CardInputField>
  );
}
