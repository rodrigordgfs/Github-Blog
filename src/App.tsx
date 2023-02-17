import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { UserProvider } from './contexts/UserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
