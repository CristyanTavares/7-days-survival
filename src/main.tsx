import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { buildUrlWithCurrentParams } from './utils/navigation'

// Interceptador global para garantir que todo redirecionamento externo passe window.location.search
if (typeof window !== 'undefined') {
  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement)?.closest('a')
    if (!target) return

    const href = target.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('javascript:')) return

    if (href.startsWith('http://') || href.startsWith('https://')) {
      event.preventDefault()
      window.location.href = buildUrlWithCurrentParams(href)
    }
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
