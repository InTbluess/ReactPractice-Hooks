import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterApp from './counter-app/counter-app.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)
