import styled from '@emotion/styled';
import type { CardCompany } from '../../constants/cardCompanies.ts';
import useAddCardCompleteNavigate from '../../hooks/useAddCardCompleteNavigate.ts';
import useCardForm from '../../hooks/useCardForm.ts';
import useProgressive from '../../hooks/useProgressive.tsx';
import CardPreview from '../common/entities/CardPreview.tsx';
import Button from '../common/shared/Button.tsx';
import Flex from '../common/shared/Flex.tsx';
import PositionBottom from '../common/shared/PositionBottom.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import CardCompanyInputField from './CardCompanyInputField.tsx';
import CardNumbersInputField from './CardNumbersInputField.tsx';
import CvcInputField from './CvcInputField.tsx';
import ExpirationDateInputField from './ExpirationDateInputField.tsx';
import PasswordInputField from './PasswordInputField.tsx';

const CARD_FORM_STEPS = {
  cardNumbers: { prev: null, next: 'cardCompany' },
  cardCompany: { prev: 'cardNumbers', next: 'expirationDate' },
  expirationDate: { prev: 'cardCompany', next: 'cvc' },
  cvc: { prev: 'expirationDate', next: 'password' },
  password: { prev: 'cvc', next: 'submit' },
  submit: { prev: 'password', next: null },
} as const;

export default function CardForm() {
  const { values } = useCardForm();
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
          cardNumbers={cardNumbers ?? ''}
          cardCompany={cardCompany ?? ''}
          expirationMonth={expirationMonth ?? ''}
          expirationYear={expirationYear ?? ''}
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
          <PositionBottom>
            <Button autoFocus fullWidth size="lg">
              확인
            </Button>
          </PositionBottom>
        </Progressive.Step>
      </Progressive>
    </Form>
  );
}

const Form = styled.form``;
