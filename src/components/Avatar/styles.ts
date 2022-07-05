import styled, { css } from 'styled-components'

export const Container = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.xxxlarge};
    border-radius: 50%;

    box-shadow: 0 0 ${theme.spacings.xxsmall} rgba(0, 0, 0, 0.1);
  `}
`
