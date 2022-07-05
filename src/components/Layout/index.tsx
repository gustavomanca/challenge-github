import { ReactNode } from 'react'

import useLoader from '../../hooks/useLoader'

import Loader from '../Loader'
import Navbar from '../Navbar'
import * as S from './styles'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { loading } = useLoader()

  return (
    <S.Container>
      {loading && <Loader />}
      <Navbar />
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Layout
