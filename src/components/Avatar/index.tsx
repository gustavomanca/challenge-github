import { ImgHTMLAttributes } from 'react'
import * as S from './styles'

type Props = ImgHTMLAttributes<HTMLImageElement>
const Avatar = (props: Props) => <S.Container {...props} />

export default Avatar
