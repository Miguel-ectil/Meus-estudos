import styled from 'styled-components';
import { flex, FlexProps } from 'styled-system';

type InputProps = FlexProps;

export const Input = styled.input<InputProps>`
  background-color: transparent;
  padding: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  ${flex}
`;
