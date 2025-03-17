import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('main');
const root = createRoot(container);

root.render(<App message="Povoi"/>)