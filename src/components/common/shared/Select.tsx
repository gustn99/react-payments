import styled from '@emotion/styled';
import { COLOR_PALETTE } from '../../../styles/colorPalette.ts';

interface SelectProps {
  isEmpty?: boolean;
}

const Select = styled.select<SelectProps>`
  appearance: base-select;
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: 1px solid ${COLOR_PALETTE.gray400};
  padding: 8px;
  cursor: pointer;

  font-size: 11px;
  line-height: 135%;

  color: ${({ isEmpty }) => (isEmpty ? COLOR_PALETTE.gray400 : COLOR_PALETTE.black)};

  ::picker(select) {
    appearance: base-select;
    top: anchor(bottom);
    margin-top: 4px;
    border: 1px solid ${COLOR_PALETTE.gray400};
    border-radius: 5px;
  }

  ::picker-icon {
    content: url('/chevron.svg');
    opacity: 0.4;
  }

  :focus-within,
  :open {
    outline: none;
    border: 1px solid ${COLOR_PALETTE.black};

    ::picker-icon {
      content: url('/chevron.svg');
      opacity: 1;
    }
  }

  :hover {
    background-color: white;
  }
`;

export default Select;
