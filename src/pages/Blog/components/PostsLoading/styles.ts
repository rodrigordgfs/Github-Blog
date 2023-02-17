import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const PostContainerLoading = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 48px;
`
export const PostCardContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  gap: 20px;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};
  cursor: pointer;
`
export const PostCardHeaderLoading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`

export const PostCardHeaderTitleLoading = styled(Skeleton)`
  width: 200px;
  height: 30px;
`

export const PostCardHeaderDateLoading = styled(Skeleton)`
  width: 70px;
  height: 30px;
`
export const PostCardResumeLoading = styled(Skeleton)`
  height: 160px;
  width: 100%;
`
