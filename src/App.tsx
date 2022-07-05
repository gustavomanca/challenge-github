import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout'
import Routing from './routes/Routing'
import { GlobalStyles, theme } from './styles'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <Routing />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
