import styled, { css } from 'styled-components'
import Accordion from '../../components/Accordion'
import Button from '../../components/Button'

export const Back = styled(Button).attrs({
  variant: 'text'
})`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.small};
    padding: 0;
    width: fit-content;
  `}
`

export const Branches = styled.section``

export const BranchesLabel = styled.h1`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.small};
  `}
`

export const Branch = styled(Accordion)`
  ${({ theme }) => css`
    &:not(:last-of-type) {
      margin: 0 0 ${theme.spacings.xxsmall};
    }

    h1 {
      padding: 0 ${theme.spacings.large} 0 0;

      font-family: ${theme.font.primary};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};

      text-align: left;
      text-overflow: ellipsis;

      overflow: hidden;
      white-space: nowrap;
    }
  `}
`

export const Commit = styled.li`
  ${({ theme }) => css`
    &:not(:last-of-type) {
      margin: 0 0 ${theme.spacings.xxsmall};
    }
  `}
`

export const CommitMessage = styled.span`
  ${({ theme }) => css`
    display: block;

    font-weight: ${theme.font.bold};
    text-overflow: ellipsis;

    overflow: hidden;
    white-space: nowrap;

    &::before {
      content: '✅';
      font-size: 12px;
      margin: 0px 8px 0px 0;
    }
  `}
`

export const CommitInfo = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    &::before {
      content: '🖊️';
      font-size: 12px;
      margin: 0px 8px 0px 0;
    }
  `}
`
