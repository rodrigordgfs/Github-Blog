import { useContextSelector } from 'use-context-selector'
import { PostContentContainer } from './styles'
import { PostContext } from '../../../../contexts/PostContext'
import ReactMarkdown from 'react-markdown'

export function PostContent() {
  const { post } = useContextSelector(PostContext, ({ post }) => {
    return { post }
  })

  return (
    <PostContentContainer>
      <ReactMarkdown>{post?.body}</ReactMarkdown>
    </PostContentContainer>
  )
}
