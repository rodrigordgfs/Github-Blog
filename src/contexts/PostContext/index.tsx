import { ReactNode, useCallback, useEffect, useState } from 'react'
import { IPost } from '../../interfaces/IPost'
import { createContext } from 'use-context-selector'
import { api } from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

interface IPostContextType {
  posts: IPost[]
  post: IPost
  totalPosts: number
  handleGetPostByNumber: (number: number) => void
  handleGoToHome: () => void
}

interface IPostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as IPostContextType)

export function PostProvider({ children }: IPostProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[])
  const [post, setPost] = useState<IPost>({} as IPost)
  const [totalPosts, setTotalPosts] = useState(0)

  const navigate = useNavigate()

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
        setTotalPosts(data?.total_count)
      })
  }, [])

  const getPostByNumber = useCallback(async (number: number) => {
    api
      .get(`/repos/rodrigordgfs/Github-Blog/issues/${number}`)
      .then(({ data }) => {
        setPost({
          id: data?.id,
          body: data?.body,
          comments: data?.comments,
          createdAt: data?.created_at,
          htmlURL: data?.html_url,
          title: data?.title,
          user: data?.user?.login,
          number: data?.number,
        } as IPost)
      })
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  function handleGetPostByNumber(number: number) {
    getPostByNumber(number)
  }

  function handleGoToHome() {
    setPost({} as IPost)
    navigate('/')
  }

  return (
    <PostContext.Provider
      value={{ posts, totalPosts, post, handleGetPostByNumber, handleGoToHome }}
    >
      {children}
    </PostContext.Provider>
  )
}
