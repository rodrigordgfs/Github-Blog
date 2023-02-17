import { createContext } from 'use-context-selector'
import { IUser } from '../../interfaces/IUser'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface IUserContextType {
  user: IUser
}

interface IUserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as IUserContextType)

export function UserProvider({ children }: IUserProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser)

  const getUser = useCallback(async () => {
    api.get('/users/rodrigordgfs').then(({ data }) => {
      setUser({
        avatarURL: data?.avatar_url,
        name: data?.name,
        bio: data?.bio,
        login: data?.login,
        company: data?.company,
        followers: data?.followers,
        htmlURL: data?.html_url,
      } as IUser)
    })
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
