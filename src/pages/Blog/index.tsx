import { UserInfo } from './components/UserInfo'
import { Posts } from './components/Posts'
import { SearchPosts } from './components/SearchPosts'
import { BlogContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { UserContext } from '../../contexts/UserContext'
import { UserInfoLoading } from './components/UserInfoLoading'

export function Blog() {
  const loadingUser = useContextSelector(UserContext, ({ loadingUser }) => {
    return loadingUser
  })

  return (
    <BlogContainer>
      {loadingUser ? <UserInfoLoading /> : <UserInfo />}
      <SearchPosts />
      <Posts />
    </BlogContainer>
  )
}
