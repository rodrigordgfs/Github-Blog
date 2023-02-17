import { useContextSelector } from 'use-context-selector'
import {
  SearchPostForm,
  SearchPostHeader,
  SearchPostsContainer,
} from './styles'
import { PostContext } from '../../../../contexts/PostContext'

export function SearchPosts() {
  const { totalPosts, loadingPosts } = useContextSelector(
    PostContext,
    ({ totalPosts, loadingPosts }) => {
      return { totalPosts, loadingPosts }
    },
  )

  return (
    <SearchPostsContainer>
      <SearchPostHeader>
        <h3>Publicações</h3>
        <p>{totalPosts} publicações</p>
      </SearchPostHeader>
      <SearchPostForm>
        <input
          type="text"
          placeholder="Buscar publicações"
          disabled={loadingPosts}
          readOnly={loadingPosts}
        />
      </SearchPostForm>
    </SearchPostsContainer>
  )
}
