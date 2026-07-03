import styled from '@emotion/styled';

const Option = styled.option`
  list-style: none;
  width: 100%;
  padding: 8px 10px;
  color: #4f4f4f;
  background-color: white;
  cursor: pointer;
  text-align: left;

  font-weight: 400;
  font-size: 10px;
  line-height: 140%;

  :hover {
    background-color: #eeeeee;
  }

  :active {
    background-color: #eeeeee;
  }

  :focus {
    outline: none;
    background-color: #eeeeee;
  }

  :first-of-type {
    border-radius: 5px 5px 0 0;
  }

  :last-of-type {
    border-radius: 0 0 5px 5px;
  }

  ::checkmark {
    display: none;
  }
`;

export default Option;
