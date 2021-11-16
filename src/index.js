import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import ContextAPI from './components/Context'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextAPI>
      <App />
    </ContextAPI>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)