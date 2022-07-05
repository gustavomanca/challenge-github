import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: ${theme.border.radius};

    height: ${theme.spacings.xlarge};
    width: 100%;
    padding: 0 ${theme.spacings.xsmall};

    background-color: ${theme.colors.secondary};
    color: ${theme.colors.lightest};
    font-family: ${theme.font.secondary};
    font-size: ${theme.font.sizes.medium};
  `}
`
