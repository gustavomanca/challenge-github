import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Accordion from '../../components/Accordion'
import Button from '../../components/Button'
import { Branch, Repo } from '../../services/typings'
import { listBranches, listCommitsFromBranch } from '../../services/api'

import * as S from './styles'

function RepoPage() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const repo: Repo = state as Repo

  const [branches, setBranches] = useState<Branch[] | null>(null)

  const fetchBranches = useCallback(async () => {
    const data = await listBranches(repo.owner.login, repo.name)
    const branches = await fetchCommits(data)
    setBranches(branches)
  }, [repo]) //eslint-disable-line

  const fetchCommits = useCallback(
    async (branches: Branch[]) => {
      const updated = branches.map(async (branch) => {
        const commits = await listCommitsFromBranch(
          repo.owner.login,
          repo.name,
          branch.name
        )
        console.log({ commits })
        return {
          ...branch,
          commits
        }
      })
      return updated
    },
    [branches] //eslint-disable-line
  )

  useEffect(() => {
    fetchBranches()
  }, [fetchBranches])

  return (
    <div>
      <Button variant="text" onClick={() => navigate(-1)}>
        Voltar
      </Button>

      {branches && (
        <S.Branches>
          <S.BranchesLabel>Branches:</S.BranchesLabel>

          {branches.map(({ name }) => (
            <S.Branch key={name}>
              <p>{name}</p>
            </S.Branch>
          ))}

          {branches.map(({ name }) => (
            <Accordion key={name}>
              <p>{name}</p>
            </Accordion>
          ))}
        </S.Branches>
      )}
    </div>
  )
}

export default RepoPage
