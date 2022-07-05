import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);

    padding: ${theme.spacings.xsmall};
  `}
`
