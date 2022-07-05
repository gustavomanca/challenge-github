import Avatar from '../../../components/Avatar'
import Button from '../../../components/Button'
import { User } from '../../../services/typings'
import * as S from './styles'

function UserCard(user: User) {
  return (
    <S.Container>
      <S.AvatarAndName>
        <Avatar src={user.avatar_url} />
        <h1>{user.name}</h1>
        <p>Localização: {user.location}</p>
      </S.AvatarAndName>

      <S.Bio>
        <S.BioLabel>Bio</S.BioLabel>
        <S.BioDescription>{user.bio}</S.BioDescription>
      </S.Bio>

      <Button>Repositórios</Button>
    </S.Container>
  )
}

export default UserCard
