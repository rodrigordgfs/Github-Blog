import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const BlogUserInfoLoading = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme['base-profile']};
  padding: 32px 40px;
  border-radius: 10px;
  gap: 32px;
`
export const BlogUserAvatarLoading = styled(Skeleton)`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`
export const BlogUserContentLoading = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const BlogUserContentHeaderLoading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const BlogUserContentTitleLoading = styled(Skeleton)`
  width: 250px;
  height: 30px;
`

export const BlogUserContentActionLoading = styled(Skeleton)`
  width: 100px;
  height: 30px;
`
export const BlogUserContentDescriptionLoading = styled(Skeleton)`
  width: 100%;
  height: 50px;
  margin-top: 8px;
`
export const BlogUserContentDetailsContainerLoading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 8px;
`

export const BlogUserContentDetailsLoading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const BlogUserContentDetailsIconLoading = styled(Skeleton)`
  width: 50px;
  height: 30px;
`

export const BlogUserContentDetailsTextLoading = styled(Skeleton)`
  width: 70px;
  height: 30px;
`
