import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout'
import { GlobalStyles, theme } from './styles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
)
