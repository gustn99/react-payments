import styled from '@emotion/styled';
import { useState } from 'react';
import useCardForm from '../../hooks/useCardForm.ts';
import { validateCardNumbers } from '../../lib/validateForm.ts';
import CardInputField from '../common/entities/CardInputField.tsx';
import Flex from '../common/shared/Flex.tsx';
import NumberInput from '../common/shared/NumberInput.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

export default function CardNumbersInputField() {
  const { register, errors, touched } = useCardForm();
  const { ref, onChange, ...props } = register('cardNumbers', validateCardNumbers);
  const errorText = (touched.cardNumbers && errors.cardNumbers) || '';
  const isError = Boolean(errorText);

  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = e.target.value;

    setCardNumbers(newCardNumbers);
    onChange(newCardNumbers.join(''));
  };

  return (
    <CardInputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      errorText={errorText}
    >
      <Fieldset>
        <Text as="legend" typograph="body1">
          카드 번호
        </Text>
        <Spacing direction="vertical" size={8} />
        <Flex gap={8}>
          <NumberInput
            {...props}
            ref={ref}
            isError={isError}
            value={cardNumbers[0]}
            onChange={(e) => handleChange(e, 0)}
            placeholder="1234"
            maxLength={4}
          />
          <NumberInput
            {...props}
            isError={isError}
            value={cardNumbers[1]}
            onChange={(e) => handleChange(e, 1)}
            placeholder="1234"
            maxLength={4}
          />
          <NumberInput
            {...props}
            isError={isError}
            value={cardNumbers[2]}
            onChange={(e) => handleChange(e, 2)}
            placeholder="1234"
            maxLength={4}
          />
          <NumberInput
            {...props}
            isError={isError}
            value={cardNumbers[3]}
            onChange={(e) => handleChange(e, 3)}
            placeholder="1234"
            maxLength={4}
          />
        </Flex>
      </Fieldset>
    </CardInputField>
  );
}

const Fieldset = styled.fieldset``;
