import { UserInfo } from './components/UserInfo'
import { Posts } from './components/Posts'
import { SearchPosts } from './components/SearchPosts'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <UserInfo />
      <SearchPosts />
      <Posts />
    </BlogContainer>
  )
}
