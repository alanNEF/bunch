import './Login.css'
import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <>
        <LoginForm/>
      </>
    </StrictMode>,
  )
  