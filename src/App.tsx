import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { UserProvider } from './contexts/UserContext'
import { PostProvider } from './contexts/PostContext'
import { ToastContainer } from 'react-toastify'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <PostProvider>
            <Router />
          </PostProvider>
        </UserProvider>
      </BrowserRouter>

      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}
