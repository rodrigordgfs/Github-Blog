import { PostCardContainer, PostCardHeader, PostCardResume } from './styles'
import { formatDate } from '../../../../../../utils/dateFormat'
import { useNavigate } from 'react-router-dom'
interface IPostCardProps {
  title: string
  createdAt: string
  body: string
  number: number
}

export function PostCard({ title, createdAt, body, number }: IPostCardProps) {
  const navigate = useNavigate()

  const resume = `${body.substring(0, 250)} ...`

  return (
    <PostCardContainer onClick={() => navigate('/post', { state: { number } })}>
      <PostCardHeader>
        <h1>{title}</h1>
        <span>{formatDate(createdAt)}</span>
      </PostCardHeader>
      <PostCardResume>{resume}</PostCardResume>
    </PostCardContainer>
  )
}
