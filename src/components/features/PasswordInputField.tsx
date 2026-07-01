import CardInputField from '../common/entities/CardInputField.tsx';
import Input from '../common/shared/Input.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

export default function PasswordInputField() {
  return (
    <CardInputField title="비밀번호를 입력해 주세요" caption="앞의 2자리를 입력해주세요">
      <Text as="label" typograph="body1">
        비밀번호 앞 2자리
      </Text>
      <Spacing direction="vertical" size={8} />
      <Input placeholder="**" />
    </CardInputField>
  );
}
