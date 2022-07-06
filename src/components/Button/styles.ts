import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { Props } from './typings'

const kinds = {
  contained: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.lightest};

    ${modifiers.backgroundDarken(0.05, theme.colors.secondary)};
  `,

  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gulfStream};
    color: ${theme.colors.lightest};

    ${modifiers.backgroundDarken(0.1, theme.colors.gulfStream)};
  `,

  outlined: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.secondary};

    background-color: transparent;
    color: ${theme.colors.secondary};

    ${modifiers.backgroundDarken(0.1, theme.colors.lightest)};
  `,

  text: (theme: DefaultTheme) => css`
    border: none;
    background-color: transparent;
    color: ${theme.colors.secondary};

    ${modifiers.backgroundDarken(0.03, theme.colors.lightest)};
  `
}

const modifiers = {
  backgroundDarken: (darkenIndex: number, color: string) => css`
    transition: background-color 0.3s ease;
    will-change: background-color;

    &:hover {
      background-color: ${darken(darkenIndex, color)};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.light};
    cursor: not-allowed;
  `
}

export const Container = styled.button<Props>`
  ${({ theme, disabled, variant = 'contained' }) => css`
    border: none;
    border-radius: ${theme.border.radius};

    height: ${theme.spacings.xlarge};
    width: 100%;
    padding: 0 ${theme.spacings.xsmall};

    font-family: ${theme.font.secondary};
    font-size: ${theme.font.sizes.medium};

    @media (min-width: ${theme.breakpoints.large}) {
      width: fit-content;
    }

    ${kinds[variant](theme)};
    ${disabled && modifiers.disabled(theme)}
  `}
`
