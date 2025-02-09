import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material'
import AppTheme from './theme/AppTheme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
