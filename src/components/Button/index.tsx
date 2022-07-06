import * as S from './styles'

import { Props } from './typings'

const Button = ({
  children,
  disabled,
  variant = 'contained',
  ...props
}: Props) => (
  <S.Container disabled={disabled} variant={variant} {...props}>
    {children}
  </S.Container>
)

export default Button
