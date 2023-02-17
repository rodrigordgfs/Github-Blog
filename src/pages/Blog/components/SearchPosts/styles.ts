import styled from 'styled-components'

export const SearchPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 72px;
`
export const SearchPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
  }

  p {
    color: ${({ theme }) => theme['base-span']};
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
  }
`
export const SearchPostForm = styled.form`
  display: flex;
  flex-direction: row;

  input {
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
