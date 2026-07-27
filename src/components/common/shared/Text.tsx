import { TYPOGRAPHY, type TypographyVariant } from '@/styles/typography.ts';
import styled from '@emotion/styled';
import type { ComponentPropsWithRef, ElementType, ReactElement } from 'react';

interface TextStyleProps {
  typograph?: TypographyVariant;
  color?: string;
  width?: number;
}

type PolymorphicProps<C extends ElementType, Props extends object> = Props & {
  as?: C;
} & Omit<ComponentPropsWithRef<C>, keyof Props | 'as'>;

const Text = styled.span<TextStyleProps>`
  ${({ typograph = 'body1' }) => TYPOGRAPHY[typograph]}
  color: ${({ color = 'inherit' }) => color};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  vertical-align: middle;
` as <C extends ElementType = 'span'>(props: PolymorphicProps<C, TextStyleProps>) => ReactElement | null;

export default Text;
