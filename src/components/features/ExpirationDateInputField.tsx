import styled from '@emotion/styled';
import useCardForm from '../../hooks/useCardForm.ts';
import { useMultipleInput } from '../../hooks/useMultipleInput.ts';
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
  const { registerInputRef, handleKeyDown, moveToNext } = useMultipleInput();

  const { register, errors } = useCardForm();

  const {
    ref: monthRef,
    onChange: onMonthChange,
    ...monthProps
  } = register('expirationMonth', { validate: validateExpirationDateMonth });
  const {
    ref: yearRef,
    onChange: onYearChange,
    ...yearProps
  } = register('expirationYear', { validate: validateExpirationDateYear, onSuccess: onComplete });

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMonthChange(e.target.value);

    if (e.target.value.length === e.target.maxLength) {
      moveToNext(0);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onYearChange(e.target.value);

    if (e.target.value.length === e.target.maxLength) {
      moveToNext(1);
    }
  };

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
            {...monthProps}
            ref={(refNode) => {
              monthRef(refNode);
              registerInputRef(0)(refNode);
            }}
            onChange={handleMonthChange}
            onKeyDown={handleKeyDown(0)}
            placeholder="MM"
            maxLength={2}
          />
          <NumberInput
            {...yearProps}
            ref={(refNode) => {
              yearRef(refNode);
              registerInputRef(1)(refNode);
            }}
            onChange={handleYearChange}
            onKeyDown={handleKeyDown(1)}
            placeholder="YY"
            maxLength={2}
          />
        </Flex>
      </Fieldset>
    </CardInputField>
  );
}

const Fieldset = styled.fieldset``;
