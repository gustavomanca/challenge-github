import styled, { css, DefaultTheme } from 'styled-components'

import { Props } from './typings'

const kinds = {
  contained: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.lightest};
  `,

  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gulfStream};
    color: ${theme.colors.lightest};
  `,

  outlined: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.secondary};

    background-color: transparent;
    color: ${theme.colors.secondary};
  `,

  text: (theme: DefaultTheme) => css`
    border: none;
    background-color: transparent;
    color: ${theme.colors.secondary};
  `
}

export const Container = styled.button<Props>`
  ${({ theme, variant = 'contained' }) => css`
    border: none;
    border-radius: ${theme.border.radius};

    height: ${theme.spacings.xlarge};
    width: 100%;
    padding: 0 ${theme.spacings.xsmall};

    font-family: ${theme.font.secondary};
    font-size: ${theme.font.sizes.medium};

    ${kinds[variant](theme)};
  `}
`
