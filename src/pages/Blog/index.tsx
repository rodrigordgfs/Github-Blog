import { CardUserInfo } from './components/CardUserInfo'
import { Posts } from './components/Posts'
import { SearchPosts } from './components/SearchPosts'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <CardUserInfo />
      <SearchPosts />
      <Posts />
    </BlogContainer>
  )
}
