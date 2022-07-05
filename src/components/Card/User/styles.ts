import styled, { css } from 'styled-components'

import SimpleCard from '../Simple'

export const Container = styled(SimpleCard)`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.xxxlarge};
    border-radius: 50%;

    box-shadow: 0 0 ${theme.spacings.xxsmall} rgba(0, 0, 0, 0.1);
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: ${theme.spacings.xsmall};

    margin: 0 0 ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div``

export const Username = styled.h1``

export const Text = styled.p``
