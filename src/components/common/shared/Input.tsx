import styled from '@emotion/styled';
import { COLOR_PALETTE } from '../../../styles/colorPalette.ts';
import { TYPOGRAPHY } from '../../../styles/typography.ts';

const Input = styled.input`
  ${TYPOGRAPHY.body2};
  width: 100%;
  padding: 8px;
  border: 1px solid ${COLOR_PALETTE.gray400};
  border-radius: 2px;

  :focus {
    border: 1px solid ${COLOR_PALETTE.black};
  }

  ::placeholder {
    color: ${COLOR_PALETTE.gray400};
  }
`;

export default Input;
