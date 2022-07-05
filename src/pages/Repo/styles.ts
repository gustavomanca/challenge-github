import styled, { css } from 'styled-components'

import SimpleCard from '../../components/Card/Simple'

export const Branches = styled.section``

export const BranchesLabel = styled.h1`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.small};
  `}
`

export const Branch = styled(SimpleCard).attrs({
  variant: 'bordered'
})`
  ${({ theme }) => css`
    &:not(:last-of-type) {
      margin: 0 0 ${theme.spacings.xxsmall};
    }
  `}
`
