import * as S from './styles'

import { Props } from './typings'

const Button = ({ children, variant = 'contained', ...props }: Props) => (
  <S.Container variant={variant} {...props}>
    {children}
  </S.Container>
)

export default Button
