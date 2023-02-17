import styled from 'styled-components'

export const BlogPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme['base-profile']};
  padding: 32px 40px;
  border-radius: 10px;
`

export const BlogPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const BlogPostBack = styled.div`
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
export const BlogPostIssueLink = styled.a`
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
export const BlogPostTitle = styled.h1`
  color: ${({ theme }) => theme['base-title']};
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  margin: 20px 0 8px 0;
`

export const BlogPostDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

export const BlogPostDetailsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  p {
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  }
`
