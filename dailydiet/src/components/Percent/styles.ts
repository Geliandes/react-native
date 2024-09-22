import styled from "styled-components/native";

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY';


type PercentProps = {
  type: PercentTypeStyleProps;
}

export const Container = styled.View<PercentProps>`
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  gap: 5px;
  justify-content: center;
  padding: 20px 16px;
  width: 100%;
`;

export const Percent = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
  line-height: 41.6px;
`

export const Legend = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  text-align: center;
`