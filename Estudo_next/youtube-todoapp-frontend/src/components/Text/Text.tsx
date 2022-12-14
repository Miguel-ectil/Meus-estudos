import styled from 'styled-components';
import { color, ColorProps, flex, FlexProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';

type TextProps = TypographyProps & SpaceProps & ColorProps & FlexProps;

export const Text = styled.p<TextProps>`
  font-family: 14px;
  color: #fff;
  ${flex}
  ${color}
  ${typography}
  ${space}
`;
