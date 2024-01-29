import React from 'react'
import ReactDOM from 'react-dom/client'
import Search from './Search.tsx'
import './index.css'
import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
  <React.StrictMode>
    <Search />
  </React.StrictMode>,
  </ErrorBoundary>
)
