import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type Props = {
  variant?: 'contained' | 'outlined'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, variant = 'contained', ...props }: Props) => (
  <S.Container variant={variant} {...props}>
    {children}
  </S.Container>
)

export default Button
