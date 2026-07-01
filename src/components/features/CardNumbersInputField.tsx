import styled from '@emotion/styled';
import CardInputField from '../common/entities/CardInputField.tsx';
import NumberInput from '../common/shared/NumberInput.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

export default function CardNumbersInputField() {
  return (
    <CardInputField title="결제할 카드 번호를 입력해 주세요" caption="본인 명의의 카드만 결제 가능합니다.">
      <Fieldset>
        <Text as="legend" typograph="body1">
          카드 번호
        </Text>
        <Spacing direction="vertical" size={8} />
        <Flex>
          <NumberInput placeholder="1234" maxLength={4} />
          <NumberInput placeholder="1234" maxLength={4} />
          <NumberInput placeholder="1234" maxLength={4} />
          <NumberInput placeholder="1234" maxLength={4} />
        </Flex>
      </Fieldset>
    </CardInputField>
  );
}

const Fieldset = styled.fieldset``;

const Flex = styled.div`
  display: flex;
  gap: 8px;
`;
