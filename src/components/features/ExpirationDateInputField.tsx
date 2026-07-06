import styled from '@emotion/styled';
import useCardForm from '../../hooks/useCardForm.ts';
import { validateExpirationDateMonth, validateExpirationDateYear } from '../../lib/validateForm.ts';
import CardInputField from '../common/entities/CardInputField.tsx';
import Flex from '../common/shared/Flex.tsx';
import NumberInput from '../common/shared/NumberInput.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

interface ExpirationDateInputFieldProps {
  onComplete?: () => void;
}

export default function ExpirationDateInputField({ onComplete }: ExpirationDateInputFieldProps) {
  const { register, errors } = useCardForm();

  return (
    <CardInputField
      title="카드 유효기간을 입력해 주세요"
      caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      errorText={errors.expirationMonth || errors.expirationYear}
    >
      <Fieldset>
        <Text as="legend" typograph="body1">
          유효기간
        </Text>
        <Spacing direction="vertical" size={8} />
        <Flex gap={8}>
          <NumberInput
            placeholder="MM"
            maxLength={2}
            {...register('expirationMonth', { validate: validateExpirationDateMonth })}
          />
          <NumberInput
            placeholder="YY"
            maxLength={2}
            {...register('expirationYear', { validate: validateExpirationDateYear, onSuccess: onComplete })}
          />
        </Flex>
      </Fieldset>
    </CardInputField>
  );
}

const Fieldset = styled.fieldset``;
