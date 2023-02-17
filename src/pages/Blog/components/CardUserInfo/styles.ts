import styled from 'styled-components'

export const BlogUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme['base-profile']};
  padding: 32px 40px;
  border-radius: 10px;
  gap: 32px;
`
export const BlogUserAvatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`
export const BlogUserContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BlogUserContentTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const BlogUserProfileLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.blue};
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const BlogUserContentDescription = styled.p`
  color: ${({ theme }) => theme['base-text']};
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin-top: 8px;
`
export const BlogUserContentDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

export const BlogUserContentDetailsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  p {
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  }
`
