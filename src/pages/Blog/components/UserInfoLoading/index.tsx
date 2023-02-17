import {
  BlogUserAvatarLoading,
  BlogUserContentLoading,
  BlogUserContentHeaderLoading,
  BlogUserInfoLoading,
  BlogUserContentTitleLoading,
  BlogUserContentActionLoading,
  BlogUserContentDescriptionLoading,
  BlogUserContentDetailsLoading,
  BlogUserContentDetailsContainerLoading,
  BlogUserContentDetailsIconLoading,
  BlogUserContentDetailsTextLoading,
} from './styles'

export function UserInfoLoading() {
  return (
    <BlogUserInfoLoading>
      <BlogUserAvatarLoading />
      <BlogUserContentLoading>
        <BlogUserContentHeaderLoading>
          <BlogUserContentTitleLoading />
          <BlogUserContentActionLoading />
        </BlogUserContentHeaderLoading>
        <BlogUserContentDescriptionLoading />
        <BlogUserContentDetailsContainerLoading>
          <BlogUserContentDetailsLoading>
            <BlogUserContentDetailsIconLoading />
            <BlogUserContentDetailsTextLoading />
          </BlogUserContentDetailsLoading>
          <BlogUserContentDetailsLoading>
            <BlogUserContentDetailsIconLoading />
            <BlogUserContentDetailsTextLoading />
          </BlogUserContentDetailsLoading>
          <BlogUserContentDetailsLoading>
            <BlogUserContentDetailsIconLoading />
            <BlogUserContentDetailsTextLoading />
          </BlogUserContentDetailsLoading>
        </BlogUserContentDetailsContainerLoading>
      </BlogUserContentLoading>
    </BlogUserInfoLoading>
  )
}
