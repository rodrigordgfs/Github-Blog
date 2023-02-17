import {
  BlogUserAvatar,
  BlogUserContent,
  BlogUserContentDescription,
  BlogUserContentDetails,
  BlogUserContentDetailsItem,
  BlogUserContentTitle,
  BlogUserInfo,
  BlogUserProfileLink,
} from './styles'
import Link from '../../../../assets/icons/Link.svg'
import Github from '../../../../assets/icons/Github.svg'
import Build from '../../../../assets/icons/Build.svg'
import User from '../../../../assets/icons/User.svg'
import { useContextSelector } from 'use-context-selector'
import { UserContext } from '../../../../contexts/UserContext'

export function UserInfo() {
  const { avatarURL, bio, company, followers, htmlURL, login, name } =
    useContextSelector(UserContext, ({ user }) => {
      return user
    })

  return (
    <BlogUserInfo>
      <BlogUserAvatar src={avatarURL} alt="" />
      <BlogUserContent>
        <BlogUserContentTitle>
          <h1>{name}</h1>
          <BlogUserProfileLink href={htmlURL} target="_blank">
            <span>Github</span>
            <img src={Link} alt="" />
          </BlogUserProfileLink>
        </BlogUserContentTitle>
        <BlogUserContentDescription>{bio}</BlogUserContentDescription>
        <BlogUserContentDetails>
          <BlogUserContentDetailsItem>
            <img src={Github} alt="" />
            <p>{login}</p>
          </BlogUserContentDetailsItem>
          <BlogUserContentDetailsItem>
            <img src={Build} alt="" />
            <p>{company}</p>
          </BlogUserContentDetailsItem>
          <BlogUserContentDetailsItem>
            <img src={User} alt="" />
            <p>{followers} seguidores</p>
          </BlogUserContentDetailsItem>
        </BlogUserContentDetails>
      </BlogUserContent>
    </BlogUserInfo>
  )
}
