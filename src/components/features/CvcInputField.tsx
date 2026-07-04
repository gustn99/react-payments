import useCardForm from '../../hooks/useCardForm.ts';
import { validateCvc } from '../../lib/validateForm.ts';
import CardInputField from '../common/entities/CardInputField.tsx';
import NumberInput from '../common/shared/NumberInput.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

export default function CvcInputField() {
  const { register, errors, touched } = useCardForm();
  const errorText = (touched.cvc && errors.cvc) || '';
  const isError = Boolean(errorText);

  return (
    <CardInputField title="CVC 번호를 입력해 주세요" errorText={errorText}>
      <Text as="label" typograph="body1">
        CVC
      </Text>
      <Spacing direction="vertical" size={8} />
      <NumberInput
        placeholder="123"
        maxLength={3}
        isError={isError}
        {...register('cvc', (value, values) => validateCvc(value, values.cardNumbers ?? ''))}
      />
    </CardInputField>
  );
}
