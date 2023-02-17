import { PostContext } from '../../../../contexts/PostContext'
import { PostCard } from './components/PostCard'
import { PostContainer } from './styles'
import { useContextSelector } from 'use-context-selector'

export function Posts() {
  const { posts } = useContextSelector(PostContext, ({ posts }) => {
    return { posts }
  })

  return (
    <PostContainer>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            createdAt={post.createdAt}
          />
        )
      })}
    </PostContainer>
  )
}
