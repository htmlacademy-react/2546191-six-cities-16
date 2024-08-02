import ErrorNotFound from '../pages/errornotfound-screen/errornotfound-screen';
import FavoritesScreen from '../pages/favorite-screen/favorites_screen';
import LoginScreen from '../pages/login-screen/login-screen';
import MainScreen from '../pages/main-screen/main-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRouter, AuthorizationStatus } from '../shared/constants';
import PrivateRoute from '../components/private-route/private-route';
import { OfferPreview } from '../types/offerPreview';
import { City } from '../types/city';
import Layout from '../components/layout-block/layout-block';


type AppScreanProps = {
  countOffers : number;
  offers : OfferPreview[];
  cities : City[];
}

function App({countOffers, offers, cities}:AppScreanProps) : JSX.Element{
  return (
    <Routes>
      <Route path={AppRouter.Main} element={<Layout />}>
        <Route index element ={<MainScreen countOfOffers = {countOffers} offers={offers} cities={cities} />}/>
        <Route path={AppRouter.Login} element ={<LoginScreen/> }/>
        <Route path={AppRouter.Favorites} element ={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen offers={offers}/></PrivateRoute>}/>
        <Route path={AppRouter.Offer} element ={<OfferScreen />}/>
        <Route path={AppRouter.OfferId} element ={<OfferScreen />}/>
        <Route path={AppRouter.NotFound} element ={<ErrorNotFound/>}/>
      </Route>

    </Routes>
  );
}

export default App;
