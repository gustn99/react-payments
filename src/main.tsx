import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@/styles/index.css';
import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
