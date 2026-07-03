import useCardForm from '../../hooks/useCardForm.ts';
import CardInputField from '../common/entities/CardInputField.tsx';
import NumberInput from '../common/shared/NumberInput.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import Text from '../common/shared/Text.tsx';

export default function PasswordInputField() {
  const { register, errors } = useCardForm();

  return (
    <CardInputField 
      title="비밀번호를 입력해 주세요" 
      caption="앞의 2자리를 입력해주세요"
      errorText={errors.password}
    >
      <Text as="label" typograph="body1">
        비밀번호 앞 2자리
      </Text>
      <Spacing direction="vertical" size={8} />
      <NumberInput type="password" placeholder="**" maxLength={2} {...register('password')} />
    </CardInputField>
  );
}
