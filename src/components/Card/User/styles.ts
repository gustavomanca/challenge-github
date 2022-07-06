import styled, { css } from 'styled-components'

import Button from '../../../components/Button'
import SimpleCard from '../Simple'

export const Link = styled(Button).attrs({})``

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

export const Item = styled.li`
  ${({ theme }) => css`
    && {
      margin: 0 0 ${theme.spacings.xsmall};
      padding: 0;
    }
  `}
`

export const Repo = styled(SimpleCard).attrs({
  variant: 'bordered'
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RepoName = styled.p`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xxsmall} 0 0;

    font-size: ${theme.font.sizes.small};

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
`

export const More = styled(Button).attrs({
  variant: 'info'
})`
  width: fit-content;
`
