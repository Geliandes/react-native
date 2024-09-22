import { Button } from "@components/Button";
import logoImg from "@assets/logo.png";
import profileImg from "@assets/profile.png";

import * as S from './styles';
import { Percent } from "@components/Percent";

export function Home() {
  return (
    <S.Container style={{alignItems: 'center'}}>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.Profile source={profileImg} />
      </S.Header>
      <Percent value={90.86} percentMin={50} legend="das refeições dentro da dieta" />

      <S.Meals>
        <S.MealTitle>Refeições</S.MealTitle>
        <Button text="Nova refeição" icon="PLUS" fullWidth />
      </S.Meals>
    </S.Container>
  );
}