import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20xp;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};
  cursor: pointer;
`
export const PostCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 20px;
    font-weight: 700;
    line-height: 160%;
  }

  span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const PostCardResume = styled.p`
  color: ${({ theme }) => theme['base-text']};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`
