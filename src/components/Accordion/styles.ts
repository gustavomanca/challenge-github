import styled, { css, DefaultTheme } from 'styled-components'
import SimpleCard from '../Card/Simple'

type TogglerProps = {
  expand: boolean
}

const modifiers = {
  expand: css`
    &::before {
      transform: translateY(-50%) rotate(135deg);
    }

    &::after {
      transform: translateY(-50%) rotate(225deg);
    }
  `,
  expandPanel: (theme: DefaultTheme) => css`
    max-height: fit-content;
    padding: ${theme.spacings.small} 0;
  `
}

export const Container = styled(SimpleCard)``

export const Toggler = styled.button<TogglerProps>`
  ${({ theme, expand }) => css`
    position: relative;

    border: none;
    height: ${theme.spacings.xlarge};
    width: 100%;

    background-color: transparent;

    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;

      border-radius: ${theme.border.radius};
      height: 0.2rem;
      width: 1rem;

      background-color: ${theme.colors.secondary};
      transition: transform 0.3s ease;
    }

    &::before {
      transform: translateY(-50%) rotate(225deg);
      right: ${theme.spacings.xsmall};
    }

    &::after {
      transform: translateY(-50%) rotate(135deg);
      right: 1rem;
    }

    ${expand && modifiers.expand}
  `}
`

export const PanelList = styled.ul<TogglerProps>`
  ${({ theme, expand }) => css`
    max-height: 0;

    list-style: none;
    overflow: hidden;

    transition: max-height 0.3s ease, padding 0.3s ease, overflow 0.3s ease;

    li {
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

      font-size: ${theme.font.sizes.small};
    }

    ${expand && modifiers.expandPanel(theme)}
  `}
`
