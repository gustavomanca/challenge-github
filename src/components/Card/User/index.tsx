import { useNavigate } from 'react-router-dom'

import Avatar from '../../../components/Avatar'
import Accordion from '../../../components/Accordion'
import { Repo, User } from '../../../services/typings'
import { VariantProps } from '../Simple'

import * as S from './styles'

type Props = {
  repos: Repo[] | null
  user: User
  variant?: VariantProps
}

function UserCard({ repos, user, variant = 'default' }: Props) {
  const navigate = useNavigate()

  return (
    <S.Container variant={variant}>
      <S.AvatarAndName>
        <Avatar src={user.avatar_url} />
        <h1>{user.name}</h1>
        <p>Localização: {user.location}</p>
      </S.AvatarAndName>

      <S.Bio>
        <S.BioLabel>Bio</S.BioLabel>
        <S.BioDescription>{user.bio}</S.BioDescription>
      </S.Bio>

      {repos && (
        <Accordion title="Repositórios">
          {repos.map((repo) => (
            <S.Item key={repo.name}>
              <S.Repo>
                <S.RepoName>{repo.name}</S.RepoName>
                <S.More
                  onClick={() => navigate('/repo', { state: { repo, user } })}
                >
                  Branches
                </S.More>
              </S.Repo>
            </S.Item>
          ))}
        </Accordion>
      )}
    </S.Container>
  )
}

export default UserCard
