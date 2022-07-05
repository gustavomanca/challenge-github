import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
  className?: string
}

const SimpleCard = ({ children, className }: Props) => (
  <S.Container className={className}>{children}</S.Container>
)

export default SimpleCard
