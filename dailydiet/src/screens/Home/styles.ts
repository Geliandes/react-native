import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  gap: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const Logo = styled.Image`
  height: 37px;
`

export const Profile = styled.Image`
  border-radius: 999px;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Meals = styled.View`
  width: 100%;
  gap: 8px;
`

export const MealTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 21px;
`