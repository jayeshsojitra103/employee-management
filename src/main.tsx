import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material';
import './index.css'
import App from './App.tsx'

import { makeServer } from './mirage/server';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

if (import.meta.env.MODE === 'development') {
  makeServer();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
     <CssBaseline />
    <App />
    </Provider>
  </StrictMode>,
)
