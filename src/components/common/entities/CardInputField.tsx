import Flex from '@/components/common/shared/Flex.tsx';
import Spacing from '@/components/common/shared/Spacing.tsx';
import Text from '@/components/common/shared/Text.tsx';
import { COLOR_PALETTE } from '@/styles/colorPalette.ts';
import styled from '@emotion/styled';
import { type PropsWithChildren } from 'react';

type CardInputFieldProps = PropsWithChildren<{
  title: React.ReactNode;
  caption?: React.ReactNode;
  errorText?: React.ReactNode;
}>;

export default function CardInputField({ title, caption, errorText, children }: CardInputFieldProps) {
  return (
    <Flex direction="column">
      <Title as="h3" typograph="title1">
        {title}
      </Title>
      {caption !== '' && (
        <>
          <Spacing direction="vertical" size={4} />
          <Text typograph="caption1" color={COLOR_PALETTE.gray400}>
            {caption}
          </Text>
        </>
      )}
      <Spacing direction="vertical" size={16} />
      {children}
      <Spacing direction="vertical" size={8} />
      <ErrorText as="div" typograph="caption1" color={COLOR_PALETTE.red}>
        {errorText}
      </ErrorText>
    </Flex>
  );
}

const Title = styled(Text)`
  padding-block: 2px;
`;

const ErrorText = styled(Text)`
  width: auto;
  height: 14px;
`;
