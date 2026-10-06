import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // add this

import Homepage from './Homepage.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)