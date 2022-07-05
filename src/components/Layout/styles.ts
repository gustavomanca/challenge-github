import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
  `}
`
