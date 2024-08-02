import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { OFFERS } from './mocks/offers_data';
import { CITIES } from './mocks/city_data';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const countOffers :number = OFFERS.length;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App countOffers = {countOffers} offers={OFFERS} cities={CITIES} />
    </BrowserRouter>
  </React.StrictMode>
);
