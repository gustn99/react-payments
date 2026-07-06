import styled from '@emotion/styled';
import CardForm from '../components/features/CardForm.tsx';
import { FormProvider } from '../contexts/FormContext.tsx';

export default function AddCardPage() {
  return (
    <PageLayout>
      <FormProvider>
        <CardForm />
      </FormProvider>
    </PageLayout>
  );
}

const PageLayout = styled.div`
  padding-inline: 30px;
`;
