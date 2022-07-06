import * as S from './styles'

import { Props } from './typings'

const Button = ({
  as,
  children,
  disabled,
  variant = 'contained',
  ...props
}: Props) => (
  <S.Container as={as} disabled={disabled} variant={variant} {...props}>
    {children}
  </S.Container>
)

export default Button
