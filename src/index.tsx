import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const countOffers :number = 5;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App countOffers = {countOffers}/>
    </BrowserRouter>
  </React.StrictMode>
);
