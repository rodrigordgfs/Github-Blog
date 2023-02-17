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

export function CardUserInfo() {
  return (
    <BlogUserInfo>
      <BlogUserAvatar
        src="https://images.generated.photos/BhZzIJblw5LBGEe8vDBYWThSehcPPW_abKhy8VPwyBg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY4NDE3LmpwZw.jpg"
        alt=""
      />
      <BlogUserContent>
        <BlogUserContentTitle>
          <h2>Rodrigo Shinoda</h2>
          <BlogUserProfileLink>
            <span>Github</span>
            <img src={Link} alt="" />
          </BlogUserProfileLink>
        </BlogUserContentTitle>
        <BlogUserContentDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </BlogUserContentDescription>
        <BlogUserContentDetails>
          <BlogUserContentDetailsItem>
            <img src={Github} alt="" />
            <p>rodrigordgfs</p>
          </BlogUserContentDetailsItem>
          <BlogUserContentDetailsItem>
            <img src={Build} alt="" />
            <p>Teste</p>
          </BlogUserContentDetailsItem>
          <BlogUserContentDetailsItem>
            <img src={User} alt="" />
            <p>rodrigordgfs</p>
          </BlogUserContentDetailsItem>
        </BlogUserContentDetails>
      </BlogUserContent>
    </BlogUserInfo>
  )
}
