import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.light};
    border-radius: ${theme.border.radius};

    height: ${theme.spacings.xlarge};
    width: 100%;

    padding: 0 ${theme.spacings.xxsmall};
  `}
`
