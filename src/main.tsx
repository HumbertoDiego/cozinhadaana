import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './styles/theme';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
