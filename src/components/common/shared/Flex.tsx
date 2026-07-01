import styled from '@emotion/styled';

interface FlexProps {
  direction?: 'row' | 'column';
  gap?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: ${({ gap = 0 }) => `${gap}px`};
`;

export default Flex;
