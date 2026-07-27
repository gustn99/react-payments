import useCardForm from '@/hooks/useCardForm.ts';

import { validatePassword } from '@/lib/validateForm.ts';
import CardInputField from '@/components/common/entities/CardInputField.tsx';
import NumberInput from '@/components/common/shared/NumberInput.tsx';
import Spacing from '@/components/common/shared/Spacing.tsx';
import Text from '@/components/common/shared/Text.tsx';

interface PasswordInputFieldProps {
  onComplete?: () => void;
}

export default function PasswordInputField({ onComplete }: PasswordInputFieldProps) {
  const { register, errors } = useCardForm();

  return (
    <CardInputField title="비밀번호를 입력해 주세요" caption="앞의 2자리를 입력해주세요" errorText={errors.password}>
      <Text as="label" htmlFor="password" typograph="body1">
        비밀번호 앞 2자리
      </Text>
      <Spacing direction="vertical" size={8} />
      <NumberInput
        id="password"
        autoFocus
        type="password"
        placeholder="**"
        maxLength={2}
        {...register('password', { validate: validatePassword, onSuccess: onComplete })}
      />
    </CardInputField>
  );
}
