import { ReactNode, useState } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
  className?: string
  title: string
}

const Accordion = ({ children, className, title }: Props) => {
  const [expand, setExpand] = useState(false)

  return (
    <S.Container className={className}>
      <S.Toggler
        onClick={() => setExpand(!expand)}
        expand={expand}
        title={title}
      >
        <h1>{title}</h1>
      </S.Toggler>
      <S.PanelList expand={expand}>{children}</S.PanelList>
    </S.Container>
  )
}

export default Accordion
