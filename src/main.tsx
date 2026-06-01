import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import CounterApp from './counter-app/counter-app.tsx'
import CharecterApp from './charercter-counter/charecter-app.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <CounterApp /> */}
    <CharecterApp />
  </StrictMode>,
)
