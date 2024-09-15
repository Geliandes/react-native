import * as S from './styles'

type HighlightProps = {
  title: string
  subtitle: string
}

export function Highlight ({ title, subtitle }: HighlightProps) {

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.subtitle>{subtitle}</S.subtitle>
    </S.Container>
  )
}