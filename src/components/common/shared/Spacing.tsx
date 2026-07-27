import styled from '@emotion/styled';

interface SpacingProps {
  direction?: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = styled.div<SpacingProps>`
  width: ${({ direction = 'horizontal', size }) => (direction === 'horizontal' ? `${size}px` : 'auto')};
  height: ${({ direction = 'horizontal', size }) => (direction === 'vertical' ? `${size}px` : 'auto')};
`;

export default Spacing;
