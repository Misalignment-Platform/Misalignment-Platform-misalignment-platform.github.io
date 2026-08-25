import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import './styles/theme.css';
import './styles/layout.css';
import './styles/components.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
