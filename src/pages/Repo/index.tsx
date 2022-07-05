import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Branch, Repo, User } from '../../services/typings'
import { listBranches, listCommitsFromBranch } from '../../services/api'
import { formatDate } from '../../utils/date'

import * as S from './styles'

type LocationProps = {
  repo: Repo
  user: User
}

function RepoPage() {
  const navigate = useNavigate()
  const location = useLocation().state as LocationProps
  const repo = location.repo

  const [branches, setBranches] = useState<Branch[] | null>(null)

  const fetchBranches = useCallback(async () => {
    const branchesData = await listBranches(repo.owner.login, repo.name)
    if (!branchesData) return
    const mappedBranches = await fetchCommits(branchesData)
    setBranches(mappedBranches)
  }, [repo]) //eslint-disable-line

  const fetchCommits = async (branchesList: Branch[]) => {
    const promises = branchesList.map(({ name }) =>
      listCommitsFromBranch(repo.owner.login, repo.name, name)
    )
    const commits = await Promise.all(promises)
    const updated = branchesList.map((branch, index) => {
      if (!commits[index]) return { ...branch }
      else
        return {
          ...branch,
          commits: commits[index]
        }
    })
    return updated
  }

  useEffect(() => {
    fetchBranches()
  }, [fetchBranches])

  return (
    <div>
      <S.Back onClick={() => navigate('/', { state: { user: location.user } })}>
        Voltar
      </S.Back>

      {branches && (
        <S.Branches>
          <S.BranchesLabel>Branches:</S.BranchesLabel>

          {branches.map(({ name, commits }) => (
            <S.Branch key={name} title={name}>
              {commits?.length &&
                commits?.map(({ commit, sha }) => (
                  <S.Commit key={sha} title={commit.message}>
                    <S.CommitMessage title={commit.message}>
                      {commit.message}
                    </S.CommitMessage>
                    <S.CommitInfo>
                      {commit.author.name} - {formatDate(commit.author.date)}
                    </S.CommitInfo>
                  </S.Commit>
                ))}
            </S.Branch>
          ))}
        </S.Branches>
      )}
    </div>
  )
}

export default RepoPage
