import * as S from './styles';

type PercentProps = {
  percentMin: number;
  value: number;
  legend: string;

}

export function Percent({ percentMin, value, legend }: PercentProps) {

  const type = value > percentMin ? 'PRIMARY' : 'SECONDARY';

  return (
    <S.Container type={type}>
      <S.Percent>{String(value.toFixed(2)).replace('.', ',')}%</S.Percent>
      <S.Legend>{legend}</S.Legend>
    </S.Container>
  );
}