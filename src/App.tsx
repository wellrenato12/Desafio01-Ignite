import { Header } from './components/Header'
import { InputAddTasks } from './components/InputAddTasks'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <InputAddTasks />
      <GlobalStyle />
    </ThemeProvider>
  )
}
