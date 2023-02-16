import styled from 'styled-components'
import Cover from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  height: 296px;
  display: flex;
  justify-content: center;
  background-image: url(${Cover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const HeaderLogo = styled.img`
  width: 148px;
  height: 98px;
  margin-top: 64px;
`
