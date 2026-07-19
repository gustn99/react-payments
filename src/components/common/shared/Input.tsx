import styled from '@emotion/styled';
import { COLOR_PALETTE } from '@/styles/colorPalette.ts';
import { TYPOGRAPHY } from '@/styles/typography.ts';

interface InputProps {
  isError?: boolean;
}

const Input = styled.input<InputProps>`
  ${TYPOGRAPHY.body2};
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ isError }) => (isError ? COLOR_PALETTE.red : COLOR_PALETTE.gray400)};
  border-radius: 2px;

  :focus {
    border: 1px solid ${COLOR_PALETTE.black};
  }

  ::placeholder {
    color: ${COLOR_PALETTE.gray400};
  }
`;

export default Input;
