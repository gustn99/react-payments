import CardNumbersInputField from '../components/features/CardNumbersInputField.tsx';
import CvcInputField from '../components/features/CvcInputField.tsx';
import ExpirationDateInputField from '../components/features/ExpirationDateInputField.tsx';
import PasswordInputField from '../components/features/PasswordInputField.tsx';

export default function AddCardPage() {
  return (
    <>
      <PasswordInputField />
      <CvcInputField />
      <ExpirationDateInputField />
      <CardNumbersInputField />
    </>
  );
}
