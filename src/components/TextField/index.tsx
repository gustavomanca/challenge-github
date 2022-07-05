import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type Props = InputHTMLAttributes<HTMLInputElement>

const TextField = (props: Props) => (
  <S.Container>
    <S.Input {...props} />
  </S.Container>
)

export default TextField
