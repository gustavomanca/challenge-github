import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xsmall};
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xsmall};

    @media (min-width: ${theme.breakpoints.large}) {
      flex-direction: row-reverse;
    }
  `}
`
