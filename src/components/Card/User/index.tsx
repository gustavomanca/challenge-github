import Button from '../../../components/Button'
import { User } from '../../../services/typings'
import * as S from './styles'

type Props = {
  onClick?: () => void
} & User

function UserCard({ avatar_url, location, login, onClick }: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Avatar src={avatar_url} />
        <S.Info>
          <S.Username>{login}</S.Username>
          <S.Text>{location}</S.Text>
        </S.Info>
      </S.Wrapper>
      <Button variant="info" onClick={onClick}>
        Mais...
      </Button>
    </S.Container>
  )
}

export default UserCard
