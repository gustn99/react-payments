import CardPreview from '@/components/common/entities/CardPreview.tsx';
import Button from '@/components/common/shared/Button.tsx';
import FixedBottom from '@/components/common/shared/FixedBottom.tsx';
import Flex from '@/components/common/shared/Flex.tsx';
import Spacing from '@/components/common/shared/Spacing.tsx';
import CardCompanyInputField from '@/components/features/CardCompanyInputField.tsx';
import CardNumbersInputField from '@/components/features/CardNumbersInputField.tsx';
import CvcInputField from '@/components/features/CvcInputField.tsx';
import ExpirationDateInputField from '@/components/features/ExpirationDateInputField.tsx';
import PasswordInputField from '@/components/features/PasswordInputField.tsx';
import type { CardCompany } from '@/constants/cardCompanies.ts';
import useAddCardCompleteNavigate from '@/hooks/useAddCardCompleteNavigate.ts';
import useCardForm from '@/hooks/useCardForm.ts';
import useProgressive from '@/hooks/useProgressive.tsx';
import styled from '@emotion/styled';

const CARD_FORM_STEPS = {
  cardNumbers: { prev: null, next: 'cardCompany' },
  cardCompany: { prev: 'cardNumbers', next: 'expirationDate' },
  expirationDate: { prev: 'cardCompany', next: 'cvc' },
  cvc: { prev: 'expirationDate', next: 'password' },
  password: { prev: 'cvc', next: 'submit' },
  submit: { prev: 'password', next: null },
} as const;

export default function CardForm() {
  const { isFormValid, values } = useCardForm();
  const { Progressive, value, next } = useProgressive(CARD_FORM_STEPS, 'cardNumbers');

  const { cardNumbers, cardCompany, expirationMonth, expirationYear } = values;

  const { navigate } = useAddCardCompleteNavigate();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    navigate({ cardNumberPrefix: cardNumbers?.slice(0, 4) ?? '', cardCompany: (cardCompany as CardCompany) ?? '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Flex justify="center">
        <CardPreview
          cardNumbers={cardNumbers}
          cardCompany={cardCompany as CardCompany}
          expirationMonth={expirationMonth}
          expirationYear={expirationYear}
        />
      </Flex>
      <Spacing direction="vertical" size={45} />

      <Progressive value={value} reverse>
        <Progressive.Step name="cardNumbers">
          <CardNumbersInputField onComplete={() => next('cardNumbers')} />
          <Spacing direction="vertical" size={80} />
        </Progressive.Step>

        <Progressive.Step name="cardCompany">
          <CardCompanyInputField onComplete={() => next('cardCompany')} />
          <Spacing direction="vertical" size={16} />
        </Progressive.Step>

        <Progressive.Step name="expirationDate">
          <ExpirationDateInputField onComplete={() => next('expirationDate')} />
          <Spacing direction="vertical" size={16} />
        </Progressive.Step>

        <Progressive.Step name="cvc">
          <CvcInputField onComplete={() => next('cvc')} />
          <Spacing direction="vertical" size={16} />
        </Progressive.Step>

        <Progressive.Step name="password">
          <PasswordInputField onComplete={() => next('password')} />
          <Spacing direction="vertical" size={16} />
        </Progressive.Step>

        <Progressive.Step name="submit">
          <FixedBottom>
            <Button autoFocus fullWidth size="lg" disabled={!isFormValid}>
              확인
            </Button>
          </FixedBottom>
        </Progressive.Step>
      </Progressive>
    </Form>
  );
}

const Form = styled.form``;
