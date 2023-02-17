import { useLocation } from 'react-router-dom'
import { PostContainer } from './styles'
import { PostInfo } from './components/PostInfo'
import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { PostContext } from '../../contexts/PostContext'
import { PostContent } from './components/PostContent'

export function Post() {
  const { state } = useLocation()
  const { number } = state

  const { handleGetPostByNumber } = useContextSelector(
    PostContext,
    ({ handleGetPostByNumber }) => {
      return { handleGetPostByNumber }
    },
  )

  useEffect(() => {
    handleGetPostByNumber(number)
  }, [number, handleGetPostByNumber])

  return (
    <PostContainer>
      <PostInfo />
      <PostContent />
    </PostContainer>
  )
}
