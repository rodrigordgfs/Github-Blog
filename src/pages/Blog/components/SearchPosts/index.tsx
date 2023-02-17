import {
  SearchPostForm,
  SearchPostHeader,
  SearchPostsContainer,
} from './styles'

export function SearchPosts() {
  return (
    <SearchPostsContainer>
      <SearchPostHeader>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </SearchPostHeader>
      <SearchPostForm>
        <input type="text" placeholder="Buscar publicações" />
      </SearchPostForm>
    </SearchPostsContainer>
  )
}
