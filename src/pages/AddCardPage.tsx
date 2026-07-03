import styled from '@emotion/styled';
import Spacing from '../components/common/shared/Spacing.tsx';
import CardCompanyInputField from '../components/features/CardCompanyInputField.tsx';
import CardNumbersInputField from '../components/features/CardNumbersInputField.tsx';
import CvcInputField from '../components/features/CvcInputField.tsx';
import ExpirationDateInputField from '../components/features/ExpirationDateInputField.tsx';
import PasswordInputField from '../components/features/PasswordInputField.tsx';
import { FormProvider } from '../contexts/FormContext.tsx';

export default function AddCardPage() {
  return (
    <PageLayout>
      <FormProvider>
        <Form>
          <PasswordInputField />
          <Spacing direction="vertical" size={16} />
          <CvcInputField />
          <Spacing direction="vertical" size={16} />
          <ExpirationDateInputField />
          <Spacing direction="vertical" size={16} />
          <CardCompanyInputField />
          <Spacing direction="vertical" size={16} />
          <CardNumbersInputField />
        </Form>
      </FormProvider>
    </PageLayout>
  );
}

const PageLayout = styled.div`
  padding-inline: 30px;
`;

const Form = styled.form``;
