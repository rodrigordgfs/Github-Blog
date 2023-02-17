import { PostCardContainer, PostCardHeader, PostCardResume } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
interface IPostCardProps {
  title: string
  createdAt: string
  body: string
}

export function PostCard({ title, createdAt, body }: IPostCardProps) {
  const date = formatDistanceToNow(new Date(new Date(createdAt)), {
    addSuffix: true,
    locale: ptBR,
  })

  const resume = `${body.substring(0, 250)} ...`

  return (
    <PostCardContainer>
      <PostCardHeader>
        <h1>{title}</h1>
        <span>{date}</span>
      </PostCardHeader>
      <PostCardResume>{resume}</PostCardResume>
    </PostCardContainer>
  )
}
