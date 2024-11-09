import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Nav from './Nav.jsx'
import MyEventsBody from './MyEventsBody.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Nav />
      <MyEventsBody/>
    </>
  </StrictMode>,
)

// {console.log('test')}
// ReactDOM.render(<h1>hi</h1>, document.getElementById('root'))
