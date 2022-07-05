import styled, { css } from 'styled-components'

import SimpleCard from '../Simple'

export const Container = styled(SimpleCard)``

export const AvatarAndName = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    margin: 0 0 ${theme.spacings.medium};
  `}
`

export const Bio = styled.div`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.large};
  `}
`

export const BioLabel = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.xxsmall};
  `}
`

export const BioDescription = styled.p``
