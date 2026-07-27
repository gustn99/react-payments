import CardInputField from '@/components/common/entities/CardInputField.tsx';
import Flex from '@/components/common/shared/Flex.tsx';
import NumberInput from '@/components/common/shared/NumberInput.tsx';
import Spacing from '@/components/common/shared/Spacing.tsx';
import Text from '@/components/common/shared/Text.tsx';
import { CARD_RULES } from '@/constants/cardRules.ts';
import useCardForm from '@/hooks/useCardForm.ts';
import { useMultipleInput } from '@/hooks/useMultipleInput.ts';
import { getCardBrand } from '@/lib/getCardBrand.ts';
import { validateCardNumbers } from '@/lib/validateForm.ts';
import styled from '@emotion/styled';
import { useState } from 'react';

interface CardNumbersInputFieldProps {
  onComplete?: () => void;
}

export default function CardNumbersInputField({ onComplete }: CardNumbersInputFieldProps) {
  const { registerInputRef, handleKeyDown, moveToNext } = useMultipleInput();

  const { register, values, errors, touched } = useCardForm();
  const { ref, onChange, ...props } = register('cardNumbers', { validate: validateCardNumbers, onSuccess: onComplete });
  const errorText = (touched.cardNumbers && errors.cardNumbers) || '';
  const isError = Boolean(errorText);

  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const cardBrand = getCardBrand(values.cardNumbers ?? '');
  const maxLength = CARD_RULES[cardBrand].maxLength;

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = e.target.value;

    setCardNumbers(newCardNumbers);
    onChange(newCardNumbers.join(''));

    if (newCardNumbers[index].length === e.target.maxLength) {
      moveToNext(index);
    }
  };

  return (
    <CardInputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      errorText={errorText}
    >
      <Fieldset>
        <Text as="legend" id="card-numbers" typograph="body1">
          카드 번호
        </Text>
        <Spacing direction="vertical" size={8} />
        <Flex gap={8}>
          {[0, 1, 2, 3].map((i) => (
            <NumberInput
              key={i}
              id={`card-number-${i}`}
              aria-labelledby="card-numbers"
              {...props}
              autoFocus={i === 0}
              ref={(refNode) => {
                registerInputRef(i)(refNode);
                if (i === 0) ref(refNode);
              }}
              isError={isError}
              value={cardNumbers[i]}
              onChange={handleChange(i)}
              onKeyDown={handleKeyDown(i)}
              placeholder="1234"
              maxLength={maxLength[i]}
            />
          ))}
        </Flex>
      </Fieldset>
    </CardInputField>
  );
}

const Fieldset = styled.fieldset``;
