import { useContextSelector } from 'use-context-selector'
import {
  SearchPostForm,
  SearchPostHeader,
  SearchPostsContainer,
} from './styles'
import { PostContext } from '../../../../contexts/PostContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const SearchPostsSchema = z.object({
  query: z.string(),
})

type SearchPostsInputs = z.infer<typeof SearchPostsSchema>

export function SearchPosts() {
  const { totalPosts, loadingPosts, getPosts } = useContextSelector(
    PostContext,
    ({ totalPosts, loadingPosts, getPosts }) => {
      return { totalPosts, loadingPosts, getPosts }
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchPostsInputs>({
    resolver: zodResolver(SearchPostsSchema),
  })

  async function handleSearchPosts(data: SearchPostsInputs) {
    await getPosts(data.query)
  }

  return (
    <SearchPostsContainer>
      <SearchPostHeader>
        <h3>Publicações</h3>
        <p>{totalPosts} publicações</p>
      </SearchPostHeader>
      <SearchPostForm onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Pressione enter para buscar"
          disabled={loadingPosts || isSubmitting}
          readOnly={loadingPosts || isSubmitting}
          {...register('query')}
        />
      </SearchPostForm>
    </SearchPostsContainer>
  )
}
