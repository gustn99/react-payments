import styled from '@emotion/styled';
import { TYPOGRAPHY } from '../../../styles/typography.ts';

export type TypographyVariant = keyof typeof TYPOGRAPHY;

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
