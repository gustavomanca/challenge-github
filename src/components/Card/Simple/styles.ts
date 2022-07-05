import styled, { css, DefaultTheme } from 'styled-components'

import { Props } from '.'

type ContainerProps = {
  variant: Props['variant']
}

const kinds = {
  bordered: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.light};
    box-shadow: none;
  `,
  default: () => css`
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
  `
}

export const Container = styled.article<ContainerProps>`
  ${({ theme, variant = 'default' }) => css`
    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.xsmall};

    ${kinds[variant](theme)}
  `}
`
