import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALETTE } from '../../../styles/colorPalette.ts';
import { TYPOGRAPHY } from '../../../styles/typography.ts';

interface ButtonProps {
  size?: 'lg' | 'md';
  fullWidth?: boolean;
  rounded?: boolean;
}

const Button = styled.button<ButtonProps>`
  ${({ size = 'md' }) => sizeMap[size]}
  ${({ fullWidth = false }) => fullWidth && 'width: 100%;'}
  ${({ rounded = false }) => rounded && `border-radius: 5px;`}
  background-color: ${COLOR_PALETTE.gray850};
  color: ${COLOR_PALETTE.white};
`;

const sizeMap = {
  lg: css`
    ${TYPOGRAPHY.button1}
    padding-block: 18px;
  `,
  md: css`
    ${TYPOGRAPHY.button2}
    padding-block: 14px;
  `,
};

export default Button;
