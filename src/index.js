import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import PageLayout from './pages/PageLayout/PageLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageLayout />
  </React.StrictMode>
);

