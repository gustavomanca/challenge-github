import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => (
  <S.Container {...props}>{props.children}</S.Container>
)

export default Button
