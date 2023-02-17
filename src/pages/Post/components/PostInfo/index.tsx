import {
  BlogPostHeader,
  BlogPostInfo,
  BlogPostBack,
  BlogPostTitle,
  BlogPostIssueLink,
  BlogPostDetails,
  BlogPostDetailsItem,
} from './styles'
import Back from '../../../../assets/icons/Back.svg'
import Link from '../../../../assets/icons/Link.svg'
import Github from '../../../../assets/icons/Github.svg'
import Calendar from '../../../../assets/icons/Calendar.svg'
import Comment from '../../../../assets/icons/Comment.svg'
import { useContextSelector } from 'use-context-selector'
import { PostContext } from '../../../../contexts/PostContext'
import { formatDate } from '../../../../utils/dateFormat'

export function PostInfo() {
  const { post, handleGoToHome } = useContextSelector(
    PostContext,
    ({ post, handleGoToHome }) => {
      return { post, handleGoToHome }
    },
  )

  return (
    <BlogPostInfo>
      <BlogPostHeader>
        <BlogPostBack onClick={handleGoToHome}>
          <img src={Back} alt="" />
          <span>Voltar</span>
        </BlogPostBack>
        <BlogPostIssueLink href={post.htmlURL} target="_blank">
          <span>Ver no Github</span>
          <img src={Link} alt="" />
        </BlogPostIssueLink>
      </BlogPostHeader>
      <BlogPostTitle>{post.title}</BlogPostTitle>
      <BlogPostDetails>
        <BlogPostDetailsItem>
          <img src={Github} alt="" />
          <p>{post.user}</p>
        </BlogPostDetailsItem>
        <BlogPostDetailsItem>
          <img src={Calendar} alt="" />
          <p>{post.createdAt && formatDate(post.createdAt)}</p>
        </BlogPostDetailsItem>
        <BlogPostDetailsItem>
          <img src={Comment} alt="" />
          <p>{post.comments} comentários</p>
        </BlogPostDetailsItem>
      </BlogPostDetails>
    </BlogPostInfo>
  )
}
