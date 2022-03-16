import React from 'react'
import ReactDOM from 'react-dom'
import ContextAPI from './components/Context'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'

ReactDOM.render(
  <ContextAPI>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ContextAPI>,
  document.getElementById('root')
)
