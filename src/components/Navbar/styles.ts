import styled, { css } from 'styled-components'
import brandLight from '../../assets/brand-light.png'

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${theme.spacings.xlarge};
    background-color: ${theme.colors.primary};

    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05);
  `}
`

export const Brand = styled.img.attrs({
  src: brandLight,
  alt: 'Logotipo just for you'
})`
  width: 8rem;
`
