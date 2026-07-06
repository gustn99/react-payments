import styled from '@emotion/styled';
import useProgressive, { type Steps } from '../../hooks/useProgressive.tsx';
import Spacing from '../common/shared/Spacing.tsx';
import CardCompanyInputField from './CardCompanyInputField.tsx';
import CardNumbersInputField from './CardNumbersInputField.tsx';
import CvcInputField from './CvcInputField.tsx';
import ExpirationDateInputField from './ExpirationDateInputField.tsx';
import PasswordInputField from './PasswordInputField.tsx';

type StepName = 'cardNumbers' | 'cardCompany' | 'expirationDate' | 'cvc' | 'password';

const CARD_FORM_STEPS: Steps<StepName> = {
  cardNumbers: { prev: null, next: 'cardCompany' },
  cardCompany: { prev: 'cardNumbers', next: 'expirationDate' },
  expirationDate: { prev: 'cardCompany', next: 'cvc' },
  cvc: { prev: 'expirationDate', next: 'password' },
  password: { prev: 'cvc', next: null },
};

export default function CardForm() {
  const { Progressive, Step, next } = useProgressive(CARD_FORM_STEPS, 'cardNumbers');

  return (
    <Form>
      <Progressive reverse>
        <Step name="cardNumbers">
          <CardNumbersInputField onComplete={() => next('cardNumbers')} />
        </Step>

        <Step name="cardCompany">
          <CardCompanyInputField onComplete={() => next('cardCompany')} />
          <Spacing direction="vertical" size={16} />
        </Step>

        <Step name="expirationDate">
          <ExpirationDateInputField onComplete={() => next('expirationDate')} />
          <Spacing direction="vertical" size={16} />
        </Step>

        <Step name="cvc">
          <CvcInputField onComplete={() => next('cvc')} />
          <Spacing direction="vertical" size={16} />
        </Step>

        <Step name="password">
          <PasswordInputField onComplete={() => next('password')} />
          <Spacing direction="vertical" size={16} />
        </Step>
      </Progressive>
    </Form>
  );
}

const Form = styled.form``;
