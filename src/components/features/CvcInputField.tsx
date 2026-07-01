import CardInputField from '../common/entities/CardInputField.tsx';
import NumberInput from '../common/shared/NumberInput.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

export default function CvcInputField() {
  return (
    <CardInputField title="CVC 번호를 입력해 주세요">
      <Text as="label" typograph="body1">
        유효기간
      </Text>
      <Spacing direction="vertical" size={8} />
      <NumberInput placeholder="123" maxLength={3} />
    </CardInputField>
  );
}
