import styled from '@emotion/styled';
import Spacing from '../components/common/shared/Spacing.tsx';
import CardNumbersInputField from '../components/features/CardNumbersInputField.tsx';
import CvcInputField from '../components/features/CvcInputField.tsx';
import ExpirationDateInputField from '../components/features/ExpirationDateInputField.tsx';
import PasswordInputField from '../components/features/PasswordInputField.tsx';

export default function AddCardPage() {
  return (
    <PageLayout>
      <PasswordInputField />
      <Spacing direction="vertical" size={16} />
      <CvcInputField />
      <Spacing direction="vertical" size={16} />
      <ExpirationDateInputField />
      <Spacing direction="vertical" size={16} />
      <CardNumbersInputField />
    </PageLayout>
  );
}

const PageLayout = styled.div`
  padding-inline: 30px;
`;
