import ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { OFFERS } from './mocks/offers_data';
import { CITIES } from './mocks/city_data';
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const countOffers :number = OFFERS.length;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App countOffers = {countOffers} cities={CITIES} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);
