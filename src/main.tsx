import './lib/supabaseClient';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { enforceMobileFluidScaling } from './utils/MobileScaleEnforcer';
import { mountFluidDebug } from './utils/fluidDebug';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

enforceMobileFluidScaling();

if (import.meta.env.DEV) mountFluidDebug();