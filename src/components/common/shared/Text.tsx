import { TYPOGRAPHY, type TypographyVariant } from '@/styles/typography.ts';
import styled from '@emotion/styled';

interface TextStyleProps {
  typograph?: TypographyVariant;
  color?: string;
  width?: number;
}

const Text = styled.span<TextStyleProps>`
  ${({ typograph = 'body1' }) => TYPOGRAPHY[typograph]}
  color: ${({ color = 'inherit' }) => color};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  vertical-align: middle;
`;

export default Text;
