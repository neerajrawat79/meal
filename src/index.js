// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './Router';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
