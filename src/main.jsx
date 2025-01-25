import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Routes.jsx';
import { ResponsiveProvider } from './context/ResponsiveContext'// Importe o ResponsiveProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveProvider> {/* Envolva o App com o ResponsiveProvider */}
      <App />
    </ResponsiveProvider>
  </StrictMode>,
);