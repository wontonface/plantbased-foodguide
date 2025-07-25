import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="lime" panelBackground="solid" radius="large" scaling="110%">
    <App />
    </Theme>
  </StrictMode>,
)

