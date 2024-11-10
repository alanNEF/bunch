import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

// {console.log('test')}
// ReactDOM.render(<h1>hi</h1>, document.getElementById('root'))
