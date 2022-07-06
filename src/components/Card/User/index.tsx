import { useNavigate } from 'react-router-dom'

import Avatar from '../../../components/Avatar'
import Accordion from '../../../components/Accordion'
import Button from '../../../components/Button'
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
        <Button
          as="a"
          variant="text"
          title={`Visite o github de ${user.name}`}
          href={user.html_url}
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          Visite o GitHub
        </Button>
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
                  title={`Ir para a página de listagem de branches do repositório ${repo.name}`}
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
