import { ReactNode, useRef, useState } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
}

const Accordion = ({ children }: Props) => {
  const [expand, setExpand] = useState(false)

  const accordionRef = useRef<HTMLDivElement>(null)

  function handleExpand() {
    setExpand((prev) => {
      if (prev === true) {
        accordionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      return !prev
    })
  }

  return (
    <div ref={accordionRef}>
      <S.Toggler onClick={handleExpand} expand={expand}>
        <h1>Repositórios</h1>
      </S.Toggler>
      <S.PanelList expand={expand}>{children}</S.PanelList>
    </div>
  )
}

export default Accordion
