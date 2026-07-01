import styled from '@emotion/styled';
import CardInputField from '../common/entities/CardInputField.tsx';
import Input from '../common/shared/Input.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

export default function ExpirationDateInputField() {
  return (
    <CardInputField title="카드 유효기간을 입력해 주세요" caption="월/년도(MMYY)를 순서대로 입력해 주세요.">
      <Fieldset>
        <Text as="legend" typograph="body1">
          유효기간
        </Text>
        <Spacing direction="vertical" size={8} />
        <Flex>
          <Input placeholder="MM" />
          <Input placeholder="YY" />
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
