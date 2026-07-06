import styled from '@emotion/styled';

interface FlexProps {
  direction?: React.CSSProperties['flexDirection'];
  gap?: number;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: ${({ gap = 0 }) => `${gap}px`};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
`;

export default Flex;
