import { ReactNode } from 'react'
import * as S from './styles'

export type VariantProps = 'bordered' | 'default'

export type Props = {
  children: ReactNode
  className?: string
  variant?: VariantProps
}

const SimpleCard = ({ children, className, variant = 'default' }: Props) => (
  <S.Container className={className} variant={variant}>
    {children}
  </S.Container>
)

export default SimpleCard
