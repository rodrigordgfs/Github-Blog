import { UserInfo } from './components/UserInfo'
import { Posts } from './components/Posts'
import { SearchPosts } from './components/SearchPosts'
import { BlogContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { UserContext } from '../../contexts/UserContext'
import { UserInfoLoading } from './components/UserInfoLoading'
import { PostContext } from '../../contexts/PostContext'
import { PostsLoading } from './components/PostsLoading'

export function Blog() {
  const loadingUser = useContextSelector(UserContext, ({ loadingUser }) => {
    return loadingUser
  })

  const loadingPosts = useContextSelector(PostContext, ({ loadingPosts }) => {
    return loadingPosts
  })

  return (
    <BlogContainer>
      {loadingUser ? <UserInfoLoading /> : <UserInfo />}
      <SearchPosts />
      {loadingPosts ? <PostsLoading /> : <Posts />}
    </BlogContainer>
  )
}
