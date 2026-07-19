import styled from '@emotion/styled';
import Spacing from '@/components/common/shared/Spacing.tsx';
import CardForm from '@/components/features/CardForm.tsx';
import { FormProvider } from '@/contexts/FormContext.tsx';

export default function AddCardPage() {
  return (
    <PageLayout>
      <Spacing direction="vertical" size={77} />
      <FormProvider>
        <CardForm />
      </FormProvider>
    </PageLayout>
  );
}

const PageLayout = styled.div`
  padding-inline: 30px;
`;
