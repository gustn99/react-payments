import styled from '@emotion/styled';
import complete from '../../public/complete.svg';
import Button from '../components/common/shared/Button.tsx';
import Flex from '../components/common/shared/Flex.tsx';
import Spacing from '../components/common/shared/Spacing.tsx';
import Text from '../components/common/shared/Text.tsx';

export default function AddCardCompletePage() {
  return (
    <PageLayout>
      <Wrapper direction="column" justify="center" align="center">
        <Icon src={complete} alt="" />
        <Spacing direction="vertical" size={40} />
        <Text typograph="display1">5511로 시작하는</Text>
        <Spacing direction="vertical" size={10} />
        <Text typograph="display1">BC카드가 등록되었어요.</Text>
        <Spacing direction="vertical" size={40} />
        <Button fullWidth rounded size="md">
          확인
        </Button>
        <Spacing direction="vertical" size={70} />
      </Wrapper>
    </PageLayout>
  );
}

const PageLayout = styled.div`
  height: 100dvh;
  padding-inline: 30px;
`;

const Wrapper = styled(Flex)`
  height: 100%;
  text-align: center;
`;

const Icon = styled.img``;
