import { PostCardContainer, PostCardHeader, PostCardResume } from './styles'

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h1>PostCard</h1>
        <span>Há 1 dia</span>
      </PostCardHeader>
      <PostCardResume>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures.
      </PostCardResume>
    </PostCardContainer>
  )
}
