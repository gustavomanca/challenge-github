import styled, { css } from 'styled-components'

export const Container = styled.section``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin: 0 0 ${theme.spacings.xxsmall};
  `}
`

export const Form = styled.form`
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
