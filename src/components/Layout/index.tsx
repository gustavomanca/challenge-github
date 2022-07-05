import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
}

import Navbar from '../Navbar'

const Layout = ({ children }: Props) => (
  <S.Container>
    <Navbar />
    {children}
  </S.Container>
)

export default Layout
