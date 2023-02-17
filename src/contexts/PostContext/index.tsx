import { ReactNode, useCallback, useEffect, useState } from 'react'
import { IPost } from '../../interfaces/IPost'
import { createContext } from 'use-context-selector'
import { api } from '../../lib/axios'

interface IPostContextType {
  posts: IPost[]
  totalPosts: number
}

interface IPostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as IPostContextType)

export function PostProvider({ children }: IPostProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[])
  const totalPosts = posts.length

  const getPosts = useCallback(async (query?: string) => {
    api
      .get('/search/issues', {
        params: {
          q: `${query || ''}repo:rodrigordgfs/Github-Blog`,
        },
      })
      .then(({ data }) => {
        setPosts(
          data?.items.map(
            (item: any) =>
              ({
                id: item?.id,
                body: item?.body,
                comments: item?.comments,
                createdAt: item?.created_at,
                htmlURL: item?.html_url,
                title: item?.title,
                user: item?.user?.login,
                number: item?.number,
              } as IPost),
          ),
        )
      })
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <PostContext.Provider value={{ posts, totalPosts }}>
      {children}
    </PostContext.Provider>
  )
}
