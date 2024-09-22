import { Pressable, Text} from "react-native";
import { styled } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';
export type ButtonIconStyleProps = 'PLUS' | 'EDIT' | 'DELETE';
export type ButtonFullWidthStyleProps = boolean;

type ButtonProps = {
  type: ButtonTypeStyleProps;
  icon?: ButtonIconStyleProps;
  fullWidth?: ButtonFullWidthStyleProps;
    isPressed?: boolean;
}

export const Container = styled(Pressable)<ButtonProps>`
background-color: ${({ theme, type, isPressed }) =>
  isPressed
    ? type === 'PRIMARY' 
      ? theme.COLORS.GRAY_100
      : theme.COLORS.GRAY_500 
    : type === 'PRIMARY' 
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE};

  border-radius: 6px;
  padding: 16px 24px;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  border: ${({ theme, type }) => type === 'PRIMARY' ? '1px solid transparent' : `1px solid ${theme.COLORS.GRAY_100}`};
`;

export const ButtonText = styled(Text)<ButtonProps>`
  color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  font-size: 14px;
  line-height: 18.2px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
