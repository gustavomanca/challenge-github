import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    @media (min-width: ${theme.breakpoints.large}) {
      padding: ${theme.spacings.xxxlarge} 0;

      margin: 0 auto;
      width: 50vw;
    }
  `}
`
